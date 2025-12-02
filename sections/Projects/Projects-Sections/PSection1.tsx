"use client";

interface PSection1Props {
    onClose: () => void;
}

import Image from 'next/image';

export const PSection1 = ({ onClose }: PSection1Props) =>{
    return(
        <section className="relative px-5 py-13 lg:px-10 flex flex-col gap-7 md:flex-row lg:flex-row lg:justify-between items-center">
            {/* Close Button */}
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 text-2xl font-bold w-3"
            >
                X
            </button>

            <div className="flex w-full md:w-1/2 lg:w-1/2 justify-center items-center">
                <Image src="/images/Proyectos/proyecto2.webp" alt="Proyecto 2" className="rounded-2xl w-65 md:w-full lg:w-full" />
            </div>

            <div className="flex flex-col gap-3 lg:gap-10 md:w-1/2 lg:w-1/2 text-center md:text-left lg:text-left px-3">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">Empréndete</h1>

                <p className="text-[11px] md:text-[14px] lg:text-[22px]">
                    INCUBUNT nace oficialmente el 13 de julio de 2009, fruto de la visión emprendedora de tres estudiantes de 
                    Ingeniería Industrial: Nikolai Ríos, Carlos Castañeda y Renato Julca motivados por fortalecer el vínculo 
                    empresarial, decidieron crear un espacio que impulsara ello.
                    <br />
                    <br />
                    Hoy, INCUBUNT es reconocida como la primera Incubadora de Empresas de su universidad y de la región, y ha 
                    logrado posicionarse como una plataforma de crecimiento para jóvenes emprendedores.
                </p>

                <div className="items-center justify-center mt-5 lg:mt-1">
                    <button className="bg-amber-300 text-white rounded-lg px-4 py-2 lg:px-10 lg:py-3 font-bold lg:text-[25px] cursor-pointer hover:bg-amber-200">MÁS INFORMACIÓN</button>
                </div>

            </div>

        </section>
    );
}
