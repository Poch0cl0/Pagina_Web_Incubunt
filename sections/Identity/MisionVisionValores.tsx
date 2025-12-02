"use client";

import {
  MissionIcon,
  VisionIcon,
} from "../../shared/icons/MockIcons";
import ValueCard from "./components/ValueCard";
import MissionVisionSection from "./components/MissionVisionSection";
import ValuesCarousel from "./components/ValuesCarousel";
import { valoresData } from "./data/ValoresData";

export default function MisionVisionValores() {
  return (
    <section id="identity-mision-vision-valores" className="w-full bg-[#F3F5FA] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 xl:px-24 relative overflow-hidden">
      {/* Fondo gris responsive*/}
      {/* Mobile*/}
      <div
        className="md:hidden absolute top-0 right-0 h-full bg-[#353535] opacity-5 pointer-events-none z-0"
        style={{ width: "calc(100% - 60px)" }}
      ></div>

      {/* Tablet y Desktop*/}
      <div className="hidden md:block absolute top-0 right-0 h-full w-[280px] lg:w-[346px] bg-[#353535] opacity-5 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 xl:gap-16 xl:items-start relative z-10">
        {/* Columna Izquierda: Misión & Visión */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <header>
            <h2 className="inline-block bg-[#FFB025] text-[#353535] font-space-grotesk font-bold text-sm sm:text-[16px] leading-[20px] sm:leading-[22px] px-4 sm:px-6 py-2 sm:py-3 rounded mb-4 sm:mb-6 tracking-wide shadow-sm opacity-90 flex items-center text-center">
              MISIÓN & VISIÓN
            </h2>
          </header>

          <MissionVisionSection
            missionIcon={
              <MissionIcon className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[88px] lg:h-[88px]" />
            }
            visionIcon={
              <VisionIcon className="w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] lg:w-[85px] lg:h-[85px]" />
            }
          />
        </div>

        {/* Columna Derecha: Nuestros Valores */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <header className="flex justify-start xl:justify-end">
            <h2 className="inline-block bg-[#FFB025] text-[#353535] font-space-grotesk font-bold text-sm sm:text-[16px] leading-[20px] sm:leading-[22px] px-4 sm:px-6 py-2 sm:py-3 rounded mb-4 sm:mb-6 tracking-wide shadow-sm opacity-90 flex items-center text-center">
              NUESTROS VALORES
            </h2>
          </header>

          {/* Mobile: Carousel de valores */}
          <div className="relative z-10 md:hidden">
            <ValuesCarousel valores={valoresData} />
          </div>

          {/* Tablet y Desktop: Grid de todos los valores */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 relative z-10">
            {valoresData.map((valor) => (
              <ValueCard
                key={valor.numero}
                numero={valor.numero}
                titulo={valor.titulo}
                descripcion={valor.descripcion}
                icon={valor.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
