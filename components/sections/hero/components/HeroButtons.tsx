import { ArrowIcon } from "../../../shared/icons/arrow-icons";
import type { HeroButtonsProps } from "../interfaces/HeroProps";

export const HeroButtons = ({ onVolunteerClick, onSponsorClick, size = "small" }: HeroButtonsProps) => {
    const styles =
        size === "small"
            ? { base: "w-[140px] h-[44px] text-[13px]", secondary: "w-[150px] h-[44px]" }
            : { base: "w-[177px] h-[57px] text-[17px]", secondary: "w-[209px] h-[57px]" };

    return (
        <div className="flex flex-row gap-3 justify-center md:justify-start">
            <button
                onClick={onSponsorClick}
                className={`group ${styles.base} bg-[#FFB025] rounded-[17px] text-white font-semibold flex items-center justify-center gap-2 px-3 py-2 hover:bg-[#f7bb52] transition-colors duration-200 cursor-pointer`}
            >
                <span>CONÓCENOS</span>
                <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
                onClick={onVolunteerClick}
                className={`group ${styles.secondary} rounded-[17px] border-2 border-white bg-[#002B4F] text-white font-semibold flex items-center justify-center gap-2 px-3 py-2 hover:bg-[#215c8b] transition-colors duration-200 text-[13px] md:text-[17px] cursor-pointer`}
            >
                <span>SÉ VOLUNTARIO</span>
                <ArrowIcon className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
            </button>
        </div>
    );
};
