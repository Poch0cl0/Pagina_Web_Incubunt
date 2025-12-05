import Link from "next/link";

export const VolunteersTeam = () => {
    return (
        <section id="equipo-voluntario" className="bg-white py-16 md:py-24 lg:py-32">
            <div className="max-w-[1280px] mx-auto px-16 xl:px-0 flex flex-col md:flex-row md:items-center justify-between gap-2">

                {/* Texto */}
                <div className="md:basis-[56%] lg:basis-[58%] min-w-[280px] text-left font-space-grotesk">
                    <p className="text-[#1e3a8a] uppercase font-bold text-[20px] md:text-[20px] tracking-[0.16em] mb-3">
                        NUESTRO MOTOR
                    </p>
                    <h2 className="text-[35px] md:text-[40px] lg:text-[54px] font-extrabold leading-[1.05] tracking-tight mb-16 text-[#002B4F]">
                        LOS VOLUNTARIOS
                    </h2>
                    <p className="text-[#0B2E4A] max-w-[50ch] mb-16 text-[18px] md:text-[20px] leading-[1.6]">
                        En INCUBUNT creemos que las <br className="hidden md:flex lg:hidden" />ideas se <br className="hidden lg:flex xl:hidden" /> construyen en equipo. <br className="flex lg:hidden" />
                        Conoce a las personas que hacen posible <strong><br className="hidden md:hidden lg:hidden xl:hidden" />cada proyecto y </strong><br className="hidden xl:flex" />
                        <strong>cada <br className="hidden md:flex xl:hidden" /> logro</strong>.
                    </p>
                    {/* AQUÍ USAR EL COMPONENTE LINK DE REACT-ROUTER-DOM EN LUGAR DEL BOTÓN*/}
                    <Link
                        href="/volunteers"
                        aria-label="Conocer al equipo"
                        className="bg-[#002B4F] text-white font-semibold py-5 px-6 lg:py-6 lg:px-8 rounded-[12px] shadow-lg hover:brightness-110 hover:-translate-y-[2px] active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer w-fit"
                    >
                        CONOCE AL EQUIPO
                        <span className="inline-block rotate-[45deg] translate-y-0.5 text-[1.15rem]" aria-hidden>↑</span>
                    </Link>
                </div>
                {/* Imagen */}
                <div className="hidden md:block md:basis-[44%] lg:basis-[42%] min-w-[260px] mt-8 md:mt-0 text-center md:text-right overflow-hidden">
                    <img
                        src="/images/equipo-voluntario.png"
                        alt="Voluntarios"
                        className="mx-auto md:mx-0 w-full h-[500px] lg:h-[600px] max-w-full md:max-w-[420px] lg:max-w-[460px] xl:max-w-[500px] drop-shadow-[0_12px_32px_rgba(2,6,23,.16)] transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>

            </div>
        </section>
    );
}
