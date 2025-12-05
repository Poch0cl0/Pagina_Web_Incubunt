'use client';

import { ArrowRightIcon, ArrowDownIcon } from "../../icons/arrow-icons";
import {
  LocationIcon,
  PhoneIcon,
  EmailIcon,
  LocationIconMobile,
  PhoneIconMobile,
  EmailIconMobile,
} from "./icons/footer-icons";
import { NavigationMenu } from "./components/NavigationMenu";
import { SocialLinks } from "./components/SocialLinks";
import { DesktopFooter } from "./components/DesktopFoter";
import { MobileFooter } from "./components/MobileFooter";


interface FooterProps {
  className?: string;
}

export const Footer = ({ className = "" }: FooterProps) => {

  const contactInfo = {
    address:
      "Salón Multiusos 4B - Escuela de Ingeniería Industrial Universidad Nacional de Trujillo",
    phone: "+51 945 239 388",
    email: "cifeunt@unitru.edu.pe",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.9474777776234!2d-79.03471232289581!3d-8.113186891835718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9dc6b6b36b%3A0x123456789abcdef!2sSal%C3%B3n%20Multiusos%204B%20-%20Escuela%20de%20Ingenier%C3%ADa%20Industrial%20Universidad%20Nacional%20de%20Trujillo!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe",
  };

  return (
    <footer
      className={`relative w-full bg-gradient-to-t from-[#002B4F] to-[#0063B5] ${className}`}
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Desktop Layout (lg and up) */}
      <DesktopFooter
        NavigationMenu={NavigationMenu}
        LocationIcon={LocationIcon}
        contactInfo={contactInfo}
        PhoneIcon={PhoneIcon}
        EmailIcon={EmailIcon}
        SocialLinks={SocialLinks}
      />

      {/* Mobile/Tablet Layout */}
      <MobileFooter
        NavigationMenu={NavigationMenu}
        LocationIconMobile={LocationIconMobile}
        contactInfo={contactInfo}
        PhoneIconMobile={PhoneIconMobile}
        EmailIconMobile={EmailIconMobile}
        SocialLinks={SocialLinks}
        ArrowRightIcon={ArrowRightIcon}
        ArrowDownIcon={ArrowDownIcon}
      />
    </footer>
  );
};
