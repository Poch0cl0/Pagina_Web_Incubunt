import { type FC } from "react";

interface ValueCardProps {
  numero: string;
  titulo: string;
  descripcion: string;
  icon: FC<{ className?: string }>;
}

export default function ValueCard({
  numero,
  titulo,
  descripcion,
  icon: Icon,
}: ValueCardProps) {
  return (
    <li className="relative bg-white rounded-2xl shadow p-6 pt-10 flex flex-col items-center text-center overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
      {/* Círculo de animación de fondo */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1976D2] rounded-full scale-0 group-hover:scale-[6] transition-transform duration-700 ease-out origin-center opacity-0 group-hover:opacity-100 w-48 h-48"
        style={{
          transitionTimingFunction: "cubic-bezier(1.5, 2.5, 1, 2)",
        }}
      ></div>

      {/* Número*/}
      <div className="absolute left-4 top-6 z-10">
        <span className="text-[40px] md:text-[50px] text-[#D9D9D9] group-hover:text-white/20 font-space-grotesk font-bold leading-none transition-colors duration-500">
          {numero}
        </span>
      </div>

      {/* Icono centrado */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-10">
        <Icon className="w-[58px] h-[58px] text-[#0063B5] group-hover:text-white transition-colors duration-500" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mt-16 w-full">
        <h3 className="text-base font-semibold text-[#0063B5] group-hover:text-white mb-1 transition-colors duration-500">
          {titulo}
        </h3>

        <p className="text-base text-[#353535] group-hover:text-white leading-[24px] transition-colors duration-500">
          {descripcion}
        </p>
      </div>
    </li>
  );
}
