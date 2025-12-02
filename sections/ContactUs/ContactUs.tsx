"use client";

import { useState } from "react";
import { SponsorModal } from "../../shared/components/Forms/Sponsor/SponsorModal";
import Image from 'next/image';

// import { ArrowIcon } from "../../shared/icons/arrow-icons";

export const ContactUs = () => {
  const [showSponsorForm, setShowSponsorForm] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="
          relative overflow-hidden bg-[#FFB025]
          px-6 py-24 md:py-48 lg:pt-24 md:px-24 lg:pb-0
          rounded-br-[250px] md:rounded-br-[400px]
        "
      >
        <div className="flex flex-col lg:flex-row items-center max-w-[1440px] mx-auto">
          <div className="w-full lg:w-2/3 text-center md:text-start lg:text-left flex flex-col gap-5">
            <h1 className="text-white text-[22px] md:text-[28px] lg:text-[40px] font-bold leading-tight">
              Juntos impulsando el cambio
            </h1>

            <p className="text-[#353535] italic text-[14px] md:text-[16px] lg:text-[18px] xl:text-[23px] max-w-[600px]">
              Tu apoyo hoy es la innovación del mañana. Al unirte como aliado,
              potenciarás ideas y proyectos con impacto real, dejando una huella
              positiva en el futuro.{" "}
              <span className="font-bold">
                ¡Conviértete en nuestro socio para transformar el mundo!
              </span>
            </p>
            <button
              onClick={() => setShowSponsorForm(true)}
              aria-label="Abrir formulario de patrocinio"
              className="
                group inline-flex flex-none items-center gap-3
                px-5 py-3 rounded-full
                bg-white text-[#353535] font-semibold whitespace-nowrap
                transition-colors hover:bg-gray-100 cursor-pointer shadow-sm
                max-w-max self-start
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0063B5]/30
              "
            >
              <span className="text-sm md:text-base">Contáctanos</span> 

              {/* círculo azul con flecha — más grande y con movimiento en hover */}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0063B5] transform transition-transform duration-200 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-white"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M8.5 12H15M15 12L11.5 8.5M15 12L11.5 15.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span> 
             </button> 

          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/joven-sentado-laptop.webp"
              alt="Joven con laptop"
              width={500}
              height={500}
              className="w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {showSponsorForm && (
        <SponsorModal
          isOpen={showSponsorForm}
          onClose={() => setShowSponsorForm(false)}
        />
      )}
    </>
  );
};
