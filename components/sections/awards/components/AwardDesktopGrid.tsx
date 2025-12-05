import AwardImage from "./AwardImage";
import AwardPopUp from "./AwardPopUp";
import { awardsData } from "../data/awards";

export const AwardDesktopGrid = () => (
  <div
    className="
      hidden lg:grid 
      pt-28 
      w-full max-w-[90rem]  /* antes: max-w-screen-xl */
      mx-auto justify-center 
      gap-10 xl:gap-14 
      grid-cols-3 place-items-center
    "
  >
    {awardsData.slice(0, 3).map((award) => (
      <AwardImage
        key={award.id}
        image={award.image}
        isSelected={false}
        onClick={() => {}}
        popup={
          <AwardPopUp
            id={award.id.toString()}
            title={award.title}
            text={award.description}
          />
        }
        desktop
      />
    ))}
  </div>
);
