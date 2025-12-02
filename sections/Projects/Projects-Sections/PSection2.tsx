"use client";

interface PSection2Props {
    onClose: () => void;
}

import Image from 'next/image';

export const PSection2 = ({ onClose }: PSection2Props) =>{
    return(
        <section className="relative px-5 py-13 lg:px-10 flex flex-col gap-10 md:flex-row lg:flex-row lg:justify-between items-center">
            {/* Close Button */}
            <button 
                onClick={onClose} 
                className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
                X
            </button>

            <div className="flex w-full md:w-1/2 lg:w-1/2 justify-center items-center">
                <Image src="/images/Proyectos/proyecto1.webp" alt="Proyecto 2" className="rounded-2xl w-65 md:w-full lg:w-full" />
            </div>

            <div className="flex flex-col gap-5 lg:gap-10 md:w-1/2 lg:w-1/2">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">Incubank</h1>

                <p className="text-[11px] md:text-[14px] lg:text-[22px]">
                    INCUBANK 2.0 - Capacitación financiera, es un programa organizado por el Centro Universitario 
                    de Innovación y Formación Empresarial, INCUBUNT, donde se brindarán temas referidos al manejo 
                    de las finanzas, donde estudiantes y profesionales interesados en estos temas, podrán adquirir 
                    conocimientos que serán útiles, tanto en el ámbito profesional, como personal.
                    <br />
                    <br />
                    Buscamos crear un espacio donde jóvenes y adultos compartirán conocimientos relacionados a las 
                    finanzas, incentivando así, el uso óptimo del capital o ganancias, tanto en la inversión como 
                    en el día a día, a través de información de calidad y relevancia.
                </p>

                <div className="items-center justify-center">
                    <button className="bg-amber-300 text-white rounded-lg px-3 py-1 lg:px-10 lg:py-3 font-bold lg:text-[25px] cursor-pointer hover:bg-amber-200">MÁS INFORMACIÓN</button>
                </div>

            </div>

        </section>
    );
}
