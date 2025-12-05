const AwardPopUp = ({ id, title, text }: { id: string; title: string; text: string }) => {
  return (
    <div
      className="
        bg-[#353535E5] text-white rounded-xl shadow-lg opacity-90
        p-4 md:p-5 lg:p-6 xl:p-7
        w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[380px]
        transition-all duration-300
      "
    >
      <h3 className="text-[0.7rem] md:text-[0.8rem] lg:text-sm font-semibold uppercase tracking-wide mb-1">
        {id}° CONCURSO
      </h3>

      <h4 className="text-sm md:text-base lg:text-lg xl:text-xl font-bold leading-snug mb-2">
        {title}
      </h4>

      <p className="text-xs md:text-sm lg:text-[15px] xl:text-base italic leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default AwardPopUp;
