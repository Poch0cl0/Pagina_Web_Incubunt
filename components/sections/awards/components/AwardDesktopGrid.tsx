import AwardImage from "./AwardImage";
import AwardPopUp from "./AwardPopUp";
import type { Award } from "@/types/database.types";

export const AwardDesktopGrid = ({ awards }: { awards: Award[] }) => (
  <div
    className="
      hidden lg:grid
      pt-28
      w-full max-w-[90rem]
      mx-auto justify-center
      gap-10 xl:gap-14
      grid-cols-3 place-items-center
    "
  >
    {awards.slice(0, 3).map((award) => (
      <AwardImage
        key={award.id_award}
        image={{
          src: award.image_url || "/images/placeholder.png",
          alt: award.title,
        }}
        isSelected={false}
        onClick={() => { }}
        popup={
          <AwardPopUp
            id={award.id_award.toString()}
            title={award.title}
            text={award.description || ""}
          />
        }
        desktop
      />
    ))}
  </div>
);
