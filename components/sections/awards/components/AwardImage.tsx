import type { AwardImageProps } from "../interfaces/AwardsProps";
import {
  getContainerClasses,
  getImageClasses,
  getPopupClasses,
} from "../utils/awardImageClasses";

const AwardImage = ({
  image,
  isSelected,
  onClick,
  popup,
  desktop = false,
}: AwardImageProps) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${getContainerClasses(desktop)}`}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={`object-cover absolute top-0 left-0 w-full h-full rounded-2xl transition-all duration-500 ${getImageClasses(desktop, isSelected)}`}
      />
      {popup && (
        <div
          className={`absolute left-0 bottom-6 w-full flex justify-center z-20 transition-all duration-500 ease-out ${getPopupClasses(desktop, isSelected)}`}
        >
          {popup}
        </div>
      )}
    </div>
  );
};

export default AwardImage;
