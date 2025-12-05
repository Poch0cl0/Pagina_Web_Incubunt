import type { Image } from "../../../../types/Image";

export interface AwardImageProps {
  image: Image;
  isSelected: boolean;
  onClick: () => void;
  popup?: React.ReactNode;
  desktop?: boolean;
}