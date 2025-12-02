"use client";

import { useState } from "react";
import { VolunteerModal } from "../../shared/components/Forms/Volunteer/VolunteerModal";
import { SponsorModal } from "../../shared/components/Forms/Sponsor/SponsorModal";
import { HeroMobile } from "./components/HeroMobile";
import { HeroDesktop } from "./components/HeroDesktop";
import { HeroPartners } from "./components/HeroPartners";

export const Hero = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showSponsorForm, setShowSponsorForm] = useState(false);

  const handleVolunteerClick = () => setShowVolunteerForm(true);
  const handleSponsorClick = () => setShowSponsorForm(true);

  return (
    <>
      <section
        className="mx-auto flex flex-col justify-between text-white bg-cover bg-center gap-20 md:gap-8 lg:gap-8"
        style={{ backgroundImage: "url('/images/hero-main.webp')" }}
      >
        {/* Mobile */}
        <HeroMobile
          onVolunteerClick={handleVolunteerClick}
          onSponsorClick={handleSponsorClick}
        />

        {/* Desktop */}
        <HeroDesktop
          onVolunteerClick={handleVolunteerClick}
          onSponsorClick={handleSponsorClick}
        />

        {/* Sección de aliados */}
        <HeroPartners />
      </section>  

      {/* Modal de Voluntariado */}
      {showVolunteerForm && (
        <VolunteerModal
          isOpen={showVolunteerForm}
          onClose={() => setShowVolunteerForm(false)}
        />
      )}

      {/* Modal de Contacto */}
      {showSponsorForm && (
        <SponsorModal
          isOpen={showSponsorForm}
          onClose={() => setShowSponsorForm(false)}
        />
      )}
    </>
  );
};
