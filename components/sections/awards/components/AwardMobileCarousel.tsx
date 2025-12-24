import AwardImage from "./AwardImage";
import AwardPopUp from "./AwardPopUp";
import type { Award } from "@/types/database.types";

export const AwardMobileCarousel = ({
    awards,
    selectedId,
    setSelectedId,
    containerRef,
    handleScroll,
}: {
    awards: Award[];
    selectedId: number | null;
    setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    handleScroll: () => void;
}) => (
    <div className="pt-24 w-full block lg:hidden">
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="relative z-10 flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 md:gap-6 px-4"
        >
            {awards.map((award) => (
                <AwardImage
                    key={award.id_award}
                    image={{
                        src: award.image_url || "/images/placeholder.png",
                        alt: award.title,
                    }}
                    isSelected={award.id_award === selectedId}
                    onClick={() => setSelectedId(award.id_award)}
                    popup={
                        award.id_award === selectedId ? (
                            <AwardPopUp
                                id={award.id_award.toString()}
                                title={award.title}
                                text={award.description || ""}
                            />
                        ) : undefined
                    }
                />
            ))}
        </div>
    </div>
);
