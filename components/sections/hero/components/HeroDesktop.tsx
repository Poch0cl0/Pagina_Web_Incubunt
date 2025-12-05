import { HeroButtons } from "./HeroButtons";
import type { HeroDesktopProps } from "../interfaces/HeroProps";

export const HeroDesktop = ({ onVolunteerClick, onSponsorClick }: HeroDesktopProps) => {

  return (
    <div className="hidden md:flex py-50 lg:py-50 justify-between lg:px-20">
      <div className="flex flex-row gap-12 items-center justify-center -rotate-90 w-16">
        {[...Array(5)].map((_, i) => (
          <p key={i} className="text-white/50 text-xs lg:text-sm">INCUBUNT</p>
        ))}
      </div>

      <div className="flex flex-col pl-14 lg:pl-28 pr-4 lg:pr-16 gap-6 max-w-4xl mr-auto">
        <h1 className="text-[32px] leading-tight font-extrabold md:text-[64px] md:leading-[1.1] uppercase">
          TU IDEA NUESTRO IMPULSO
        </h1>
        <p className="text-[16px] md:text-[20px] leading-relaxed text-gray-100">
          En INCUBUNT acompañamos a los emprendedores de la UNT a transformar
          sus ideas en proyectos reales, sostenibles e innovadores
        </p>

        {/* <HeroButtons
          onVolunteerClick={onVolunteerClick}
          onSponsorClick={onSponsorClick}
          size="large"
        /> */}
      </div>
    </div>
  );
};
