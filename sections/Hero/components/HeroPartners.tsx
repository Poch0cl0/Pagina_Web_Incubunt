export const HeroPartners = () => {
  return (
    <div className="flex flex-row bg-white/40 py-3 md:py-2 lg:py-5 px-5 items-center justify-center text-center gap-8 md:gap-20 lg:gap-40">
      <p className="text-[11px] font-bold md:text-[15px] lg:text-[23px]">
        NUESTROS ALIADOS
      </p>
      <img src="/images/linea.png" alt="línea divisoria" className="h-5" />
      <div className="flex flex-row gap-10 md:gap-24 lg:gap-40">
        <img src="/images/WE-LOGO.webp" alt="WE logo" className="w-9 md:w-15 lg:w-20" />
        <img src="/images/AIESEC-LOGO.webp" alt="AIESEC logo" className="w-22 md:w-32 lg:w-52" />
      </div>
    </div>
  );
};
