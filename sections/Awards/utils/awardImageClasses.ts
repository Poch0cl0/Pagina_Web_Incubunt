export const getContainerClasses = (desktop: boolean) =>
  desktop
    ? `
      group relative cursor-pointer
      transition-all duration-500 ease-in-out

      /* Tamaños base */
      w-[16rem] h-[23rem]          /* 1024px base */
      lg:w-[18rem] lg:h-[25rem]    /* 1280px */
      xl:w-[20rem] xl:h-[27rem]    /* 1440px */
      2xl:w-[22rem] 2xl:h-[29rem]  /* 1536px+ */

      /* Aumento real en hover */
      hover:w-[18rem] hover:h-[25rem]
      lg:hover:w-[19.5rem] lg:hover:h-[26.5rem]
      xl:hover:w-[23.5rem] xl:hover:h-[30rem]
      2xl:hover:w-[25.5rem] 2xl:hover:h-[32.5rem]
    `
    : `
      flex-shrink-0 snap-center 
      w-full md:w-[70%] 
      h-[26rem] md:h-[28rem]
    `;

export const getImageClasses = (desktop: boolean, isSelected: boolean) =>
  desktop
    ? `
      object-cover absolute top-0 left-0 w-full h-full rounded-2xl
      grayscale opacity-70 
      group-hover:grayscale-0 group-hover:opacity-100
      transition-all duration-500 ease-in-out
    `
    : isSelected
    ? `
      object-cover absolute top-0 left-0 w-full h-full rounded-2xl
      grayscale-0 opacity-100 scale-110 transition-all duration-500 ease-in-out
    `
    : `
      object-cover absolute top-0 left-0 w-full h-full rounded-2xl
      grayscale opacity-70 scale-95 transition-all duration-500 ease-in-out
    `;

export const getPopupClasses = (desktop: boolean, isSelected: boolean) =>
  desktop
    ? `
      opacity-0 translate-y-4 
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 ease-out
    `
    : isSelected
    ? "opacity-100 translate-y-0 transition-all duration-500 ease-out"
    : "opacity-0 translate-y-4 pointer-events-none transition-all duration-500 ease-out";
