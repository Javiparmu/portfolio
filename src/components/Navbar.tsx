import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productMenuOpen, setProductMenuOpen] = useState(false)

  return (
    <header className="relative isolate z-10 bg-gray-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <div>
                    <button onClick={() => setProductMenuOpen(!productMenuOpen)} type="button" className="flex items-center gap-x-1 text-md font-semibold leading-6 text-white" aria-expanded="false">
                        Proyectos
                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div className={`absolute inset-x-0 top-0 -z-10 bg-gray-900 pt-14 shadow-lg ring-1 ring-gray-900/5 transition duration-200 transform ${productMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                            <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-900">
                                    <svg className="h-6 w-6 text-white group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>
                                </div>
                                <a href="#" className="mt-6 block font-semibold text-white">
                                    GabyGuillénArt
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-500">Get a better understanding where your traffic is coming from</p>
                            </div>
                            <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-900">
                                    <svg className="h-6 w-6 text-white group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                    </svg>
                                </div>
                                <a href="#" className="mt-6 block font-semibold text-white">
                                    NT-History
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-500">Speak directly to your customers with our engagement tool</p>
                            </div>
                            <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-900">
                                    <svg className="h-6 w-6 text-white group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                    </svg>
                                </div>
                                <a href="#" className="mt-6 block font-semibold text-white">
                                    GeoViewer
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-500">Your customers’ data will be safe and secure</p>
                            </div>
                            <div className="group relative rounded-lg p-6 text-md leading-6 hover:bg-gray-800">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-900">
                                    <svg className="h-6 w-6 text-white group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <a href="#" className="mt-6 block font-semibold text-white">
                                    Chesster
                                    <span className="absolute inset-0"></span>
                                </a>
                                <p className="mt-1 text-gray-500">Your customers’ data will be safe and secure</p>
                            </div>
                        </div>
                        <div className="bg-gray-800">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                <div className="flex justify-center divide-x divide-gray-900/5 border-x border-gray-900/5">
                                    <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-white hover:bg-gray-800 rounded-md">
                                        <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clip-rule="evenodd" />
                                        </svg>
                                        Ver todos los proyectos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#" className="text-md font-semibold leading-6 text-white">Experiencia</a>
                <a href="#" className="text-md font-semibold leading-6 text-white">Sobre mí</a>
                <a href="#" className="text-md font-semibold leading-6 text-white">Contacto</a>
            </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10"></div>
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Contacto</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                    <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <div className="-mx-3">
                            <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                                Proyectos
                                {/* <!--
                                Expand/collapse icon, toggle classes based on menu open state.

                                Open: "rotate-180", Closed: ""
                                --> */}
                                <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                            <div className="mt-2 space-y-2" id="disclosure-1">
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Analytics</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Engagement</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Security</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Integrations</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Watch demo</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Contact sales</a>
                                <a href="#" className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-white hover:bg-gray-50">Ver todos los proyectos</a>
                            </div>
                            </div>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Experiencia</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Sobre mí</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Contacto</a>
                        </div>
                        <div className="py-6" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
