"use client";
import { useState } from "react";
import type { Image } from "@/types/Image";
import { aboutImages } from "./data/aboutImages";
import { swapMainImage } from "@/utils/imageUtils";

export const About = () => {
    const [orderedImages, setOrderedImages] = useState<Image[]>(aboutImages);

    const handleThumbnailClick = (indexToBecomeMain: number) => {
        setOrderedImages(swapMainImage(orderedImages, indexToBecomeMain));
    };

    return (
        <section id="about" className="bg-[url('/images/fondo.webp')] py-15 px-10 lg:col-span-2 lg:py-30 lg:px-15">
            <div className="container mx-auto flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-15">
                <div>
                    <h1 className="text-[#FFB025] text-[15px] lg:text-[25px] font-bold">QUIENES SOMOS</h1>
                    <h1 className="text-white font-bold text-[20px] lg:text-[30px] mt-5 md:mt-2 lg:mt-2">Inspira, <span className="text-[#FFB025]">Innova,</span><br />Emprende</h1>
                    <p className="text-white text-[10px] lg:text-[15px] mt-5 lg:mt-5">
                        INCUBUNT nace oficialmente el 13 de julio de 2009, fruto de la visión emprendedora de tres estudiantes
                        de Ingeniería Industrial: Nikolai Ríos, Carlos Castañeda y Renato Julca motivados por fortalecer el vínculo
                        empresarial, decidieron crear un espacio que impulsara ello.
                        <br /><br />
                        Hoy, INCUBUNT es reconocida como la primera Incubadora de Empresas de su universidad y de la región, y ha
                        logrado posicionarse como una plataforma de crecimiento para jóvenes emprendedores.
                    </p>
                </div>

                <div className="lg:w-1100  w-full">
                    <div className="flex flex-col lg:flex-row gap-4 md:gap-1 lg:gap-10">
                        <div className="relative flex-grow order-1 lg:order-1">
                            <img
                                src={orderedImages[0].src}
                                alt={orderedImages[0].alt}
                                className="w-full h-full lg:w-1500 lg:h-100 object-cover rounded-xl aspect-video lg:aspect-auto"
                            />
                            <div className="absolute top-1/3 -translate-y-1/2 -right-3 h-2/4 w-1 bg-[#FFB025] rounded-full"></div>
                        </div>

                        <div className="flex flex-row lg:flex-col justify-center gap-3 md:mt-8 order-2">
                            {orderedImages.slice(1).map((image, index) => {
                                const originalIndex = index + 1;

                                return (
                                    <button
                                        key={image.id}
                                        type="button"
                                        onClick={() => handleThumbnailClick(originalIndex)}
                                        aria-label={`Ver ${image.alt}`}
                                        className="cursor-pointer rounded-lg overflow-hidden transition-all duration-300
                                                opacity-50 hover:opacity-100 focus:opacity-100 
                                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#25272C] focus:ring-[#FFB025]"
                                    >
                                        <img
                                            src={image.src}
                                            alt={`Miniatura de ${image.alt}`}
                                            className="w-200 h-15 lg:w-300 lg:h-25 md:h-30 object-cover pointer-events-none"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
