interface IconProps {
    className?: string;
}

export const NextIcon = ({className}: IconProps) => (
    <svg aria-label="Next.js logomark" className={className} height="100" role="img" viewBox="0 0 180 180" width="100">
        <mask height="180" id=":R0:mask0_408_134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="180" x="0" y="0"><circle cx="90" cy="90" fill="black" r="90">
            </circle>
        </mask>
        <g mask="url(#:R0:mask0_408_134)">
            <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:R0:paint0_linear_408_134)"></path>
            <rect fill="url(#:R0:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
        </g>
        <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
                <stop stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
        </defs>
    </svg>
)

export const AstroIcon = ({className}: IconProps) => (
    <svg aria-label="Astro" className={className} width="100" height="100" viewBox="0 0 64 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_831_2294)">
            <path d="M19.9924 65.9282C16.1165 62.432 14.9851 55.0859 16.5999 49.7638C19.3998 53.1193 23.2793 54.1822 27.2977 54.7822C33.5013 55.7081 39.5937 55.3618 45.3565 52.5637C46.0158 52.2434 46.625 51.8174 47.3454 51.386C47.8861 52.9341 48.0268 54.497 47.838 56.0877C47.3787 59.9617 45.4251 62.9542 42.3177 65.2227C41.0752 66.13 39.7604 66.9411 38.4771 67.7967C34.5346 70.4262 33.4679 73.5095 34.9494 77.9946C34.9846 78.1038 35.0161 78.2131 35.0957 78.4797C33.0828 77.5909 31.6124 76.2965 30.4921 74.5946C29.3088 72.7984 28.7458 70.8114 28.7162 68.6615C28.7014 67.6152 28.7014 66.5597 28.5588 65.5282C28.2107 63.0135 27.0144 61.8876 24.7608 61.8227C22.4479 61.7561 20.6183 63.1672 20.1331 65.3893C20.0961 65.5597 20.0424 65.7282 19.9887 65.9263L19.9924 65.9282Z" fill="url(#paint0_linear_831_2294)"/>
            <path d="M0.5 51.3932C0.5 51.3932 11.0979 46.2433 21.7254 46.2433L29.7382 21.5069C30.0381 20.3106 30.9141 19.4977 31.9029 19.4977C32.8918 19.4977 33.7677 20.3106 34.0677 21.5069L42.0804 46.2433C54.6672 46.2433 63.3058 51.3932 63.3058 51.3932C63.3058 51.3932 45.3044 2.47586 45.2692 2.37772C44.7526 0.931458 43.8804 0 42.7045 0H21.1032C19.9273 0 19.0903 0.931458 18.5384 2.37772C18.4995 2.47401 0.5 51.3932 0.5 51.3932Z" fill="white"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_831_2294" x1="15.8877" y1="78.4797" x2="53.1292" y2="60.6489" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D83333"/>
            <stop offset="1" stopColor="#F041FF"/>
            </linearGradient>
            <clipPath id="clip0_831_2294">
            <rect width="64" height="79" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const ReactIcon = ({className}: IconProps) => (
    <svg className={className} width={100} height={100} viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
    </svg>
)

export const NodeIcon = ({className}: IconProps) => (
    <svg className={`${className}`} x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#388e3c" d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"></path>
        <path fill="white" d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"></path>
        <path fill="#2e7d32" d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path>
        <path fill="#4caf50" d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"></path>
        <path fill="white" d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"></path>
    </svg>
)

export const TypescriptIcon = ({className}: IconProps) => (
    <svg className={`${className} icon icon-tabler icon-tabler-brand-typescript`} width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3179C6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path>
        <path d="M9 12h4"></path>
        <path d="M11 12v6"></path>
        <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path>
    </svg>
)

export const MongoIcon = ({className}: IconProps) => (
    <svg className={className} width="100" height="100" viewBox="0 0 120 257" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.3229 28.5501C71.5367 15.7947 62.2485 2.84006 60.351 0.149477C60.1512 -0.0498257 59.8515 -0.0498257 59.6518 0.149477C57.7542 2.84006 48.4661 15.7947 37.6798 28.5501C-54.9019 146.238 52.2613 225.661 52.2613 225.661L53.1601 226.258C53.959 238.516 55.9565 256.154 55.9565 256.154H59.9514H63.9463C63.9463 256.154 65.9438 238.615 66.7428 226.258L67.6416 225.561C67.7414 225.561 174.905 146.238 82.3229 28.5501ZM59.9514 223.867C59.9514 223.867 55.1576 219.781 53.8592 217.688V217.489L59.6518 89.3375C59.6518 88.9389 60.2511 88.9389 60.2511 89.3375L66.0436 217.489V217.688C64.7453 219.781 59.9514 223.867 59.9514 223.867Z" fill="#00ED64"/>
    </svg>
)

export const TailwindIcon = ({className}: IconProps) => (
    <svg className={className} width={100} height={100} fill="none" viewBox="0 0 54 33">
        <g clipPath="url(#prefix__clip0)">
            <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/>
        </g>
        <defs>
            <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h54v32.4H0z"/>
            </clipPath>
        </defs>
    </svg>
)

export const TrpcIcon = ({className}: IconProps) => (
    <svg className={className} width="100" height="100" viewBox="0 0 512 512" fill="none">
        <rect width="512" height="512" rx="150" fill="#398CCB"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M255.446 75L326.523 116.008V138.556L412.554 188.238V273.224L435.631 286.546V368.608L364.6 409.615L333.065 391.378L256.392 435.646L180.178 391.634L149.085 409.615L78.0538 368.538V286.546L100.231 273.743V188.238L184.415 139.638L184.462 139.636V116.008L255.446 75ZM326.523 159.879V198.023L255.492 239.031L184.462 198.023V160.936L184.415 160.938L118.692 198.9V263.084L149.085 245.538L220.115 286.546V368.538L198.626 380.965L256.392 414.323L314.618 380.712L293.569 368.538V286.546L364.6 245.538L394.092 262.565V198.9L326.523 159.879ZM312.031 357.969V307.915L355.369 332.931V382.985L312.031 357.969ZM417.169 307.846L373.831 332.862V382.985L417.169 357.9V307.846ZM96.5154 357.9V307.846L139.854 332.862V382.915L96.5154 357.9ZM201.654 307.846L158.315 332.862V382.915L201.654 357.9V307.846ZM321.262 291.923L364.6 266.908L407.938 291.923L364.6 316.962L321.262 291.923ZM149.085 266.838L105.746 291.923L149.085 316.892L192.423 291.923L149.085 266.838ZM202.923 187.362V137.308L246.215 162.346V212.377L202.923 187.362ZM308.015 137.308L264.723 162.346V212.354L308.015 187.362V137.308ZM212.154 121.338L255.446 96.3231L298.785 121.338L255.446 146.354L212.154 121.338Z" fill="white"/>
    </svg>
)

export const RedisIcon = ({ className }: IconProps) => (
    <svg className={className} width={100} height={100} viewBox="0 0 146.41 125.59">
        <defs>
            <clipPath id="clipPath" transform="translate(0.01 0.01)">
                <rect width="146.42" height="125.48" style={{ fill: "none" }} />
            </clipPath>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <g style={{ clipPath: "url(#clipPath)" }}>
                    <path style={{ fill: "#a32422" }} d="M140.66,96.74c-7.8,4.08-48.28,20.73-57,25.3s-13.39,4.44-20.21,1.18S13.7,102.5,5.92,98.78C2,96.94,0,95.37,0,93.9V79.09S56.08,66.92,65.13,63.64,77.31,60.28,85,63.1,138.79,74.24,146.4,77V91.6c0,1.52-1.75,3-5.74,5.13Z" transform="translate(0.01 0.01)" />
                    <path style={{ fill: "#dc382c" }} d="M140.66,82c-7.8,4.06-48.28,20.71-57,25.2s-13.39,4.45-20.21,1.2S13.7,87.69,5.92,84s-7.93-6.27-.3-9.25S56.08,55,65.13,51.7,77.31,48.33,85,51.16,133,70,140.57,72.79s7.92,5.08.09,9.13Z" transform="translate(0.01 0.01)" />
                    <path style={{ fill: "#a32422" }} d="M140.66,72.62c-7.8,4.07-48.28,20.71-57,25.2S70.31,102.27,63.49,99,13.7,78.37,5.92,74.66C2,72.8,0,71.24,0,69.76V55S56.08,42.79,65.13,39.51,77.31,36.14,85,39,138.79,50.1,146.4,52.88v14.6C146.4,69,144.65,70.52,140.66,72.62Z" transform="translate(0.01 0.01)" />
                    <path style={{ fill: "#dc382c" }} d="M140.66,57.81c-7.8,4.08-48.28,20.72-57,25.21s-13.39,4.46-20.21,1.2S13.7,63.57,5.92,59.85-2,53.6,5.62,50.62s50.46-19.79,59.51-23S77.31,24.21,85,27,133,45.94,140.57,48.65s7.92,5.09.09,9.13Z" transform="translate(0.01 0.01)" />
                    <path style={{ fill: "#a32422" }} d="M140.66,47.59c-7.8,4.08-48.28,20.73-57,25.21S70.31,77.25,63.49,74,13.7,53.34,5.92,49.63C2,47.79,0,46.22,0,44.74V29.93S56.08,17.76,65.13,14.49,77.31,11.12,85,13.94s53.77,11.14,61.38,13.92v14.6C146.4,44,144.65,45.5,140.66,47.59Z"transform="translate(0.01 0.01)" />
                    <path style={{ fill: "#dc382c" }} d="M140.66,32.8c-7.8,4-48.28,20.75-57,25.2s-13.39,4.44-20.21,1.2S13.7,38.53,5.92,34.83s-7.93-6.27-.3-9.25S56.08,5.8,65.13,2.54,77.31-.82,85,2,133,20.85,140.57,23.63s7.92,5.09.09,9.14Z" transform="translate(0.01 0.01)" />
                </g>
                <polygon style={{ fill: "#fff" }} points="75.51 11.78 85.17 8.61 82.55 14.87 92.38 18.55 79.71 19.87 76.86 26.71 72.28 19.08 57.63 17.76 68.57 13.82 65.28 7.76 75.51 11.78 75.51 11.78 75.51 11.78" />
                <polygon style={{ fill: "#fff" }} points="76.12 51.71 52.44 41.88 86.36 36.67 76.12 51.71 76.12 51.71 76.12 51.71" />
                <path style={{ fill: "#fff" }} d="M43.28,22.34c10,0,18.13,3.15,18.13,7s-8.15,7-18.13,7-18.14-3.15-18.14-7S33.27,22.34,43.28,22.34Z" transform="translate(0.01 0.01)" />
                <polygon style={{ fill: "#741113" }} points="107.39 20.42 127.46 28.35 107.41 36.28 107.39 20.42 107.39 20.42 107.39 20.42" />
                <polygon style={{ fill: "#ac2724" }} points="107.39 20.42 107.41 36.28 105.23 37.13 85.17 29.2 107.39 20.42 107.39 20.42 107.39 20.42" />
            </g>
        </g>
    </svg>
);

export const AwsIcon = ({ className }: IconProps) => (
    <svg className={className} id="Layer_1" viewBox="0 0 300.7 179.8" width="100" height="100">
        <path style={{ fill: '#fff' }} className="st0" d="M84.7 65.3c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5C39.3.8 44.5.2 50 .2c11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4h.2zM44.1 80.5c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7V53c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L95 9.1c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9L129 73.7l15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zM252.9 94c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2S251.8 0 256.2 0c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"/>
        <path style={{ fill: '#f90' }} className="st1" d="M271.8 142.6c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
        <path style={{ fill: '#f90' }} className="st1" d="M285.5 127c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
    </svg>
);

export const GcpIcon = ({ className }: IconProps) => (
    <svg className={className} width="100" height="100" viewBox="0 0 64 64">
        <path d="M40.728 20.488l2.05.035 5.57-5.57.27-2.36C44.2 8.657 38.367 6.26 31.993 6.26c-11.54 0-21.28 7.852-24.163 18.488.608-.424 1.908-.106 1.908-.106l11.13-1.83s.572-.947.862-.9A13.88 13.88 0 0 1 32 17.375c3.3.007 6.34 1.173 8.728 3.102z" fill="#ea4335"/>
        <path d="M56.17 24.77c-1.293-4.77-3.958-8.982-7.555-12.177l-7.887 7.887c3.16 2.55 5.187 6.452 5.187 10.82v1.392c3.837 0 6.954 3.124 6.954 6.954 0 3.837-3.124 6.954-6.954 6.954H32.007L30.615 48v8.346l1.392 1.385h13.908A18.11 18.11 0 0 0 64 39.647c-.007-6.155-3.1-11.6-7.83-14.876z" fill="#4285f4"/>
        <path d="M18.085 57.74h13.9V46.6h-13.9a6.89 6.89 0 0 1-2.862-.622l-2.007.615-5.57 5.57-.488 1.88a18 18 0 0 0 10.926 3.689z" fill="#34a853"/>
        <path d="M18.085 21.57A18.11 18.11 0 0 0 0 39.654c0 5.873 2.813 11.095 7.166 14.403l8.064-8.064a6.96 6.96 0 0 1-4.099-6.339c0-3.837 3.124-6.954 6.954-6.954 2.82 0 5.244 1.7 6.34 4.1l8.064-8.064c-3.307-4.353-8.53-7.166-14.403-7.166z" fill="#fbbc05"/>
    </svg>
);

export const DockerIcon = ({ className }: IconProps) => (
    <svg className={className} fill="#E5F2FC" width={100} height={100} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 439 309" >
        <path className="st0" d="M379.6,111.7c-2.3-16.7-11.5-31.2-28.1-44.3l-9.6-6.5l-6.4,9.7c-8.2,12.5-12.3,29.9-11,46.6
            c0.6,5.8,2.5,16.4,8.4,25.5c-5.9,3.3-17.6,7.7-33.2,7.4H1.7l-0.6,3.5c-2.8,16.7-2.8,69,30.7,109.1c25.5,30.5,63.6,46,113.4,46
            c108,0,187.8-50.3,225.3-141.9c14.7,0.3,46.4,0.1,62.7-31.4c0.4-0.7,1.4-2.6,4.2-8.6l1.6-3.3l-9.1-6.2
            C419.9,110.8,397.2,108.3,379.6,111.7L379.6,111.7z M240,0h-45.3v41.7H240V0z M240,50.1h-45.3v41.7H240V50.1z M186.4,50.1h-45.3
            v41.7h45.3V50.1z M132.9,50.1H87.6v41.7h45.3V50.1z M79.3,100.2H34v41.7h45.3V100.2z M132.9,100.2H87.6v41.7h45.3V100.2z
            M186.4,100.2h-45.3v41.7h45.3V100.2z M240,100.2h-45.3v41.7H240V100.2z M293.6,100.2h-45.3v41.7h45.3V100.2z"/>
    </svg>
);

export const SvelteIcon = ({ className }: IconProps) => (
    <svg width={100} height={100} id="Layer_1" x="0px" y="0px" viewBox="0 0 98.1 118">
        <path style={{ fill: '#FF3E00' }} className="st0" d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3
            c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1
            c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"/>
        <path style={{ fill: '#FFFFFF' }} className="st1" d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1
            c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72
            c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7
            c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5
            c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1
            c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1
            c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5
            c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"/>
    </svg>
);
