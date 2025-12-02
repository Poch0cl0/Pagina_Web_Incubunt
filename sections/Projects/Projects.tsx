"use client";

import { useState } from 'react';
import { PSection1 } from './Projects-Sections/PSection1';
import { PSection2 } from './Projects-Sections/PSection2';
import Image from 'next/image';

export const Projects = () => {
    const [isRotating1, setIsRotating1] = useState(false);
    const [isRotating2, setIsRotating2] = useState(false);

    const [visibleSection, setVisibleSection] = useState<string | null>(null);

    const handlePlayClick = (sectionName: string, setRotating: (val: boolean) => void) => {
        setRotating(true);
        setVisibleSection(sectionName);
        setTimeout(() => {
            setRotating(false);
        }, 4000);
    };

    const handleCloseSection = () => {
        setVisibleSection(null);
    };

    return (    
        <>  
            <section className="bg-[url('/images/fondo.webp')] items-center justify-center flex flex-col py-15 px-8 gap-50 md:gap-25">
    
                {/* Fila 1: Título */}
                <div className="flex justify-center">
                    <div className="bg-[#FFB025] py-1 px-5 md:py-2 md:px-10">
                        <h1 className="font-bold text-[20px] lg:text-3xl">PROYECTOS MÁS DESTACADOS</h1>
                    </div>
                </div>

                {/* Fila 2: Proyecto 1 */}
                <div className="hidden md:flex md:-translate-x-30 md:translate-y-17 lg:-translate-x-50 w-50 h-full justify-center items-center">
                    <Image 
                        src="/images/Proyectos/tuerca.webp" 
                        alt="Fondo Tuerca" 
                        className={`absolute object-contain z-20 h-48 ${isRotating1 ? 'rotate-360' : ''}`} 
                    />

                    <Image src="/images/Proyectos/fondoCirculo.webp" alt="Fondo Circulo" className="absolute h-32 z-20" />
                    <Image src="/images/Proyectos/logoProyecto1.webp" alt="Logo Proyecto 1" className="absolute h-23 z-20 transform" />

                    <div className="absolute z-20 transform translate-y-16 flex justify-center items-center">
                        <button 
                            className="rounded-full bg-[#FFB025] h-9 w-9 cursor-pointer" 
                            onClick={() => handlePlayClick('section2', setIsRotating1)}
                        >
                            <Image src="/images/Proyectos/play.webp" alt="Imagen play" className="h-5 w-5 translate-x-2" />
                        </button>
                    </div>
                </div>

                {/* Fila 2: Proyecto 2 */}
                <div className="relative mt-10 md:translate-x-30 md:-translate-y-17 lg:translate-x-50 w-50 h-full flex justify-center items-center">
                    <Image 
                        src="/images/Proyectos/tuerca.webp" 
                        alt="Fondo Tuerca" 
                        className={`absolute object-contain z-20 h-48 ${isRotating2 ? 'rotate-left' : ''}`} 
                    />

                    <Image src="/images/Proyectos/fondoCirculo.webp" alt="Fondo Circulo" className="absolute h-32 z-20" />
                    <Image src="/images/Proyectos/logoProyecto2.webp" alt="Logo Proyecto 1" className="absolute h-23 z-20 transform" />

                    <div className="absolute z-20 transform translate-y-16 flex justify-center items-center">
                        <button 
                            className="rounded-full bg-[#FFB025] h-9 w-9 cursor-pointer" 
                            onClick={() => handlePlayClick('section1', setIsRotating2)}
                        >
                            <Image src="/images/Proyectos/play.webp" alt="Imagen play" className="h-5 w-5 translate-x-2" />
                        </button>
                    </div>
                </div>
                
                {/* Fila 3: Botón Ver Más */}
                <div className="flex justify-center">
                    <button className="px-14 py-1 lg:px-25 lg:py-2 lg:text-2xl rounded-lg border-white border-2 text-white bg-[#002B4F] cursor-pointer hover:bg-[#073459]">
                        VER MÁS
                    </button>
                </div>
            </section>

            {visibleSection === 'section1' && <PSection1 onClose={handleCloseSection} />}
            {visibleSection === 'section2' && <PSection2 onClose={handleCloseSection} />}
        </>
    );
}
