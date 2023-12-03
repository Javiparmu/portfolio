import { useState } from "react"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [productMenuOpen, setProductMenuOpen] = useState(false)

    return (
        <header className="relative isolate z-10 bg-gray-900">
            <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-20">
                    <div>
                        <button onClick={() => setProductMenuOpen(!productMenuOpen)} type="button" className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white" aria-expanded="false">
                            Proyectos
                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className={`absolute inset-x-0 top-0 -z-10 bg-gray-900 pt-14 shadow-lg ring-1 ring-gray-900/5 transition duration-200 transform ${productMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                            <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-8 lg:px-8 xl:gap-x-8">
                                <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800 transition-all duration-200">
                                    <figure className="inline-flex">
                                        <img width="150px" src="/images/brain-stack.webp" alt="brain stack project image" className="rounded-[5px]" />
                                    </figure>
                                    <a href="https://brain-stack.vercel.app" className="mt-2 block font-semibold text-white">
                                        Brain Stack
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-500">Hub universal para generaciones con IA.</p>
                                </div>
                                <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800 transition-all duration-200">
                                    <figure className="inline-flex">
                                        <img width="150px" src="/images/vector-valley.webp" alt="brain stack project image" className="rounded-[5px]" />
                                    </figure>
                                    <a href="https://vector-valley.vercel.app" className="mt-6 block font-semibold text-white">
                                        Vector Valley
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-500">Repositorio de iconos con generación por IA y conversión desde imagen.</p>
                                </div>
                                <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800 transition-all duration-200">
                                    <figure className="inline-flex">
                                        <img width="150px" src="/images/gaby-guillen-art.webp" alt="brain stack project image" className="rounded-[5px]" />
                                    </figure>
                                    <a href="https://gabyguillen.vercel.app" className="mt-6 block font-semibold text-white">
                                        GabyGuillénArt
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-500">Cuadros del artista Gaby Guillén con sistema de QRs para ver los cuadros.</p>
                                </div>
                                <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800 transition-all duration-200">
                                    <figure className="inline-flex">
                                        <img width="150px" src="/images/nt-history.webp" alt="brain stack project image" className="rounded-[5px]" />
                                    </figure>
                                    <a href="https://nt-history-web.vercel.app" className="mt-6 block font-semibold text-white">
                                        NT-History
                                        <span className="absolute inset-0"></span>
                                    </a>
                                    <p className="mt-1 text-gray-500">Historial de partidas de usuarios de Nuclear Throne.</p>
                                </div>
                            </div>
                            <div className="bg-gray-800">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div className="flex justify-center divide-x divide-gray-900/5 border-x border-gray-900/5">
                                        <a href="#project-section" className="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-white hover:bg-gray-800 rounded-md">
                                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clipRule="evenodd" />
                                            </svg>
                                            Ver todos los proyectos
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#experience-section" className="text-lg font-semibold leading-6 text-white">Experiencia</a>
                    <a href="#technologies-section" className="text-lg font-semibold leading-6 text-white">Tecnologías</a>
                    <a href="#contact-section" className="text-lg font-semibold leading-6 text-white">Contacto</a>
                </div>
            </nav>
            <div className={`lg:hidden h-[100vh] w-[100vw] absolute top-0 bg-gray-900 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} role="dialog" aria-modal="true">
                <div className="relative inset-0 z-10"></div>
                <div className="relative inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className="-m-1.5 p-1.5" />
                        <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="-mx-3">
                                    <button type="button" onClick={() => setProductMenuOpen(!productMenuOpen)} className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-800" aria-controls="disclosure-1" aria-expanded="false">
                                        Proyectos
                                        <svg className={`h-5 w-5 flex-none transition duration-100 transform ${productMenuOpen ? '' : 'rotate-180'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className={`mt-2 space-y-2 transition duration-100 transform ${productMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 absolute'}`} id="disclosure-1">
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-800">GabyGuillénArt</a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-800">NT-History</a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-800">GeoViewer</a>
                                        <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-800">Chesster</a>
                                    </div>
                                </div>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Experiencia</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Sobre mí</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Contacto</a>
                            </div>
                            <div className="py-6" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
