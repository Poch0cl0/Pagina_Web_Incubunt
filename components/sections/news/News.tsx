"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const News: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
        // window.scrollTo(0, 0); // Next.js handles scroll automatically usually
    };

    return (
        <section className="relative max-w-[1600px] mx-auto">

            {/* --- vista TABLET --- */}
            <div className="hidden md:block lg:hidden">
                <div className="w-full relative h-[400px]">
                    <Image
                        src="/images/News/imagen-noticias.jpg"
                        alt="Grupo de estudiantes"
                        fill
                        className="object-cover shadow-md"
                    />
                </div>

                <div className="flex flex-row gap-8">
                    {/* problemas - */}
                    <div className="w-1/2 flex flex-col justify-center items-start ml-8">
                        <h1 className="text-4xl font-bold text-black mb-6">Noticias</h1>
                        <p className="text-lg text-gray-700c items-center w-4/5">
                            Descubre nuestros proyectos, reconocimientos, colaboraciones y eventos
                            que marcan nuestra trayectoria universitaria.
                        </p>
                    </div>

                    {/* Card de Proyectos */}
                    <div className="w-1/2">
                        <div className="bg-gradient-to-br from-[#0b1420] to-[#0056cc] text-white p-8 h-full">
                            <h2 className="text-xl font-bold mb-4 inline-block bg-white text-gray-800 px-3 py-1 rounded">Proyectos</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Conoce los proyectos que ya hemos desarrollado y los que están actualmente en ejecución.
                                Un espacio para mostrar nuestro trabajo y su impacto en la comunidad universitaria.
                            </p>
                            <button onClick={() => handleNavigation("/proyectos")} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                                <span>Leer más</span>
                                <img src="/icons/icon-arrow-right.svg" alt="Flecha" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card de Comunidad */}

                <div className="bg-[#fbbf24] text-gray-900 p-8 shadow-lg">
                    <h2 className="text-gray-900 text-xl font-bold mb-4 inline-block bg-white rounded px-3 py-1">Comunidad</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Información relevante, novedades institucionales y avisos importantes
                        para mantener a toda la comunidad informada y conectada.
                    </p>
                    <button onClick={() => handleNavigation('/comunidad')} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                        <span>Leer más</span>
                        <img src="/icons/icon-arrow-right.svg" alt="Flecha" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* --- vista cel --- */}
            <div className="block md:hidden">

                <div className=" px-12 mb-6 p-4">
                    <h1 className="text-4xl font-extrabold text-black">Noticias.</h1>
                </div>


                <div className="w-full relative h-[300px]">
                    <Image
                        src="/images/News/imagen-noticias.jpg"
                        alt="Grupo de estudiantes"
                        fill
                        className="object-cover shadow-md"
                    />
                </div>

                <div className="w-full">

                    <div className="bg-gradient-to-br from-[#001f4d] to-[#0056cc] text-white p-6">
                        <h2 className="text-xl font-bold mb-4 inline-block rounded bg-white text-gray-800 px-3 py-1">Proyectos</h2>
                        <p className="text-base leading-relaxed mb-6">
                            Conoce los proyectos que ya hemos desarrollado y los que están actualmente en ejecución.
                            Un espacio para mostrar nuestro trabajo y su impacto en la comunidad universitaria.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="w-1/3 border-t border-white/30"></div>
                            <button onClick={() => handleNavigation("/proyectos")} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                                <span className="text-sm">Leer más</span>
                            </button>
                            <div className="w-1/3 border-t border-white/30"></div>
                        </div>
                    </div>

                    <div className="bg-[#fbbf24] text-gray-900 p-6 shadow-lg">
                        <h2 className="text-gray-900 text-xl font-bold mb-4 rounded inline-block px-3 py-1 bg-white">Comunidad</h2>
                        <p className="text-base leading-relaxed mb-6">
                            Información relevante, novedades institucionales y avisos importantes
                            para mantener a toda la comunidad informada y conectada.
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="w-1/3 border-t border-gray-900/30"></div>
                            <button onClick={() => handleNavigation('/comunidad')} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                                <span className="text-sm">Leer más</span>
                            </button>
                            <div className="w-1/3 border-t border-gray-900/30"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Vista compu --- */}
            <div className="hidden lg:block">
                <div className="flex flex-col lg:flex-row md:items-center gap-10 text-center">

                    <div className="lg:w-2/5 w-full text-left order-2 lg:order-1 mt-6 lg:mt-0 ">
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-black mb-4 justify-center flex lg:justify-center">
                            Noticias.
                        </h1>
                        <p className="text-lg text-gray-700 max-w-md mx-auto w-4/8 text-center lg:text-left">
                            Descubre nuestros proyectos, reconocimientos, colaboraciones y eventos
                            que marcan nuestra trayectoria universitaria.
                        </p>
                    </div>

                    {/* foto */}
                    <div className="w-full lg:w-3/5 order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[690px] z-0">
                        <Image
                            src="/images/News/imagen-noticias.jpg"
                            alt="Grupo de estudiantes"
                            fill
                            className="object-cover shadow-md"
                        />
                    </div>
                </div>

                <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 md:-mt-20 lg:-mt-[200px]  items-end  md:pl-8 lg:ml-80">
                    {/* Card 1: Proyectos */}
                    <div className="bg-gradient-to-br from-[#001f4d] to-[#0056cc] text-white p-6 md:p-8 lg:p-10">
                        <span className="inline-block bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded mb-8 md:mb-10">
                            Proyectos
                        </span>
                        <p className="text-base md:text-lg leading-relaxed mb-6">
                            Conoce los proyectos que ya hemos desarrollado y los que están actualmente en ejecución.
                            Un espacio para mostrar nuestro trabajo y su impacto en la comunidad universitaria.
                        </p>
                        <button onClick={() => handleNavigation("/proyectos")} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                            <span>Leer más</span>
                            <img src="/icons/icon-arrow-right.svg" alt="Flecha" className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Card 2: Comunidad */}
                    <div className="bg-[#fbbf24] text-gray-900 p-6 md:p-8 lg:p-10 ">
                        <span className="inline-block bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded mb-8 md:mb-10">
                            Comunidad
                        </span>
                        <p className="text-base md:text-lg leading-relaxed mb-6">
                            Información relevante, novedades institucionales y avisos importantes
                            para mantener a toda la comunidad informada y conectada.
                        </p>
                        <button onClick={() => handleNavigation('/comunidad')} className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition flex items-center space-x-2">
                            <span>Leer más</span>
                            <img src="/icons/icon-arrow-right.svg" alt="Flecha" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};