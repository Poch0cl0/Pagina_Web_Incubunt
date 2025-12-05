import type { Image } from "../types/Image";

export const swapMainImage = (images: Image[], indexToBecomeMain: number): Image[] => {
  const newOrder = [...images];
  const currentMainImage = newOrder[0];
  const clickedThumbnailImage = newOrder[indexToBecomeMain];

  newOrder[0] = clickedThumbnailImage;
  newOrder[indexToBecomeMain] = currentMainImage;

  return newOrder;
};