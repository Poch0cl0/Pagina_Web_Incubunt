"use client";
import { useState, useRef, useEffect } from "react";
import { awardsService } from "@/services/awardService";
import type { Award } from "@/types/database.types";
import { AwardDesktopGrid } from "./components/AwardDesktopGrid";
import { AwardMobileCarousel } from "./components/AwardMobileCarousel";
import { getCenteredAwardId } from "./utils/getCenteredAwardId";

export const Awards = () => {
    const [awards, setAwards] = useState<Award[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchAwards = async () => {
            try {
                const data = await awardsService.getAll();
                setAwards(data);
            } catch (error) {
                console.error("Error fetching awards:", error);
            }
        };
        fetchAwards();
    }, []);

    const handleScroll = () => {
        if (!containerRef.current || awards.length === 0) return;
        const centeredId = getCenteredAwardId(containerRef.current, awards);
        if (centeredId !== null) setSelectedId(centeredId);
    };

    return (
        <section
            id="awards"
            className="
        relative min-h-screen
        bg-[url('/images/Awards/awards-background.png')] bg-cover bg-center
        flex flex-col items-center justify-center
        px-6 md:px-10 pt-10 pb-10
      "
        >
            {/* Gradiente superpuesto */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#005AA5] via-[#104673] to-[#104572] opacity-60"></div>

            {/* Título principal */}
            <div
                className="
          absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center font-bold text-sm
          w-full max-w-xl px-4
        "
            >
                <h1
                    className="
            bg-[#FFB025] px-5 py-2 rounded-lg text-white inline-block
            text-base md:text-lg lg:text-xl xl:text-2xl
            whitespace-normal break-words
          "
                >
                    RECONOCIDOS POR LA EXCELENCIA
                </h1>

                <h2
                    className="
            text-white mt-2
            text-sm md:text-lg lg:text-xl xl:text-2xl
            tracking-wide
          "
                >
                    {awards.length} PREMIOS EN CONCEPMI
                </h2>
            </div>

            {/* Carrusel móvil */}
            <AwardMobileCarousel
                awards={awards}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                containerRef={containerRef}
                handleScroll={handleScroll}
            />

            {/* Grid desktop */}
            <AwardDesktopGrid awards={awards} />
        </section>
    );
};
