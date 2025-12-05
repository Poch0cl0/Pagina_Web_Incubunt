import { HeroButtons } from "./HeroButtons";
import type { HeroMobileProps } from "../interfaces/HeroProps";

export const HeroMobile = ({ onVolunteerClick, onSponsorClick }: HeroMobileProps) => {

  return (
    <div className="md:hidden lg:hidden">
      <div className="flex flex-row gap-3 items-center justify-center mt-10 mb-20">
        <p className="text-white/50 text-[9px]">INCUBUNT</p>
        <p className="text-white/50 text-[9px]">INCUBUNT</p>
        <p className="text-white/50 text-[9px]">INCUBUNT</p>
      </div>

      <div className="items-center justify-center text-center px-7 flex flex-col gap-5 py-20">
        <h1 className="text-[28px] font-bold">TU IDEA NUESTRO IMPULSO</h1>
        <p className="text-[14px]">
          En INCUBUNT acompañamos a los emprendedores de la UNT a transformar
          sus ideas en proyectos reales, sostenibles e innovadores
        </p>

        {/* <HeroButtons
          onVolunteerClick={onVolunteerClick}
          onSponsorClick={onSponsorClick}
          size="small"
        /> */}
      </div>
    </div>
  );
};
