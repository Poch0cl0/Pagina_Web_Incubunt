"use client";

import AwardImage from "./AwardImage";
import AwardPopUp from "./AwardPopUp";
import { awardsData } from "../data/awards";

export const AwardMobileCarousel = ({
    selectedId,
    setSelectedId,
    containerRef,
    handleScroll,
}: {
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
            {awardsData.map((award) => (
                <AwardImage
                    key={award.id}
                    image={award.image}
                    isSelected={award.id === selectedId}
                    onClick={() => setSelectedId(award.id)}
                    popup={
                        award.id === selectedId ? (
                            <AwardPopUp
                                id={award.id.toString()}
                                title={award.title}
                                text={award.description}
                            />
                        ) : undefined
                    }
                />
            ))}
        </div>
    </div>
);
