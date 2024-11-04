import logos from "../assets/images/images";

type Icons = keyof typeof logos;

type ExperienceItem = {
  logo: Icons,
  company: string,
  startDate?: string,
  endDate: string | Date,
  showRange: boolean,
  description: string
}

export const experienceItems: ExperienceItem[] = [
  {
    logo: "tacterLogo",
    company: "Tacter",
    startDate: "01/03/2024",
    endDate: new Date(),
    showRange: true,
    description: 
      `Fullstack developer con Node.js y Next.js.
      Microservicios con DDD y CQRS. Testing con Vitest y Cucumber.
      Buenas prácticas de desarrollo y arquitectura.`
  },
  {
    logo: "weplanLogo",
    company: "Weplan Analytics",
    startDate: "01/04/2023",
    endDate: "01/03/2024",
    showRange: true,
    description: 
      `Backend developer en Node.js y TypeScript. Uso de servicios cloud
      como AWS y GCP. BigQuery, Redis y Mongo para db. Libertad de
      desarrollo con tecnologías alternativas como Nitro y trpc.
      Microservicios. Docker.`
  },
  {
    logo: "digizoneLogo",
    company: "DigizoneLabs",
    startDate: "01/10/2022",
    endDate: "01/04/2023",
    showRange: true,
    description: 
      `Desarrollo de aplicaciones web y móviles con React y React
      Native para el front y Nodejs con Express y Mongo para el
      back (MERN stack).`
  },
  {
    logo: "reactLogo",
    company: "React",
    startDate: "01/10/2021",
    endDate: "01/09/2022",
    showRange: false,
    description: 
      `Después de terminar la carrera, estuve un año aprendiendo
      React por mi cuenta, obteniendo certificaciones y creando
      proyectos personales.`
  },
  {
    logo: "upctLogo",
    company: "UPCT",
    endDate: "01/09/2021",
    showRange: true,
    description: 
      `Terminé la carrera de Ingeniería Telemática en la UPCT.`
  }
]