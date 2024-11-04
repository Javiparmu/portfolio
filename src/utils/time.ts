const monthNames = [
  "ene.", "feb.", "mar.", "abr.", "may.", "jun.",
  "jul.", "ago.", "sep.", "oct.", "nov.", "dic."
];

const formatDate = (dateString: string | Date) =>{
  const date = dateString instanceof Date ? dateString : new Date(dateString.split('/').reverse().join('-'));
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

const calculateDuration = (startDate: Date, endDate: Date) =>{
  const start = new Date(startDate);
  const end = new Date(endDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth() + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} año${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} mes${months > 1 ? 'es' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ');
}

export const formatExperienceDate = (
  startDate?: string,
  endDate?: string | Date,
  showRange: boolean = true
) => {
  if (!startDate) {
    return endDate ? formatDate(endDate) : "";
  }

  const start = new Date(startDate.split('/').reverse().join('-'));
  const end = endDate ? new Date(typeof endDate === 'string' ? endDate.split('/').reverse().join('-') : endDate) : new Date();
  const isCurrent = end.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);

  const formattedStartDate = formatDate(start);
  const formattedEndDate = isCurrent ? "actualidad" : formatDate(end);
  const duration = calculateDuration(start, isCurrent ? new Date() : end);

  if (showRange) {
    return `${formattedStartDate} - ${formattedEndDate} · ${duration}`;
  }

  return duration;
}