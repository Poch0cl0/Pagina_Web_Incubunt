"use client";
import { useState } from "react";
import Link from "next/link";
import { navConfig } from "./data/navConfig";
import NavDropdownItem from "./components/NavDropdownItem";
import NavMobileMenu from "./components/NavMobileMenu";
import { SponsorModal } from "../Forms/Sponsor/SponsorModal";
import ContactFormModal from "../Contact/ContactFormModal";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const [contactType, setContactType] = useState<null | "promocion" | "voluntario">(null);

  return (
    <header className="flex items-center justify-between px-10 py-3 md:px-16 md:py-4 bg-white relative z-50">
      <Link href="/">
        <img
          src="/logos/logo-color.svg"
          alt="logo"
          className="w-[100px] h-auto lg:w-[140px] mx-2"
        />
      </Link>

      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden p-2 text-[#002B4F]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.5"
          height="21"
          viewBox="0 0 42 36"
          fill="none"
        >
          <path
            d="M3 30.5H39C40.3832 30.5 41.5 31.6168 41.5 33C41.5 34.3832 40.3832 35.5 39 35.5H3C1.61677 35.5 0.5 34.3832 0.5 33C0.5 31.6168 1.61677 30.5 3 30.5ZM3 15.5H39C40.3832 15.5 41.5 16.6168 41.5 18C41.5 19.3832 40.3832 20.5 39 20.5H3C1.61677 20.5 0.5 19.3832 0.5 18C0.5 16.6168 1.61677 15.5 3 15.5ZM3 0.5H39C40.3832 0.5 41.5 1.61677 41.5 3C41.5 4.38323 40.3832 5.5 39 5.5H3C1.61677 5.5 0.5 4.38323 0.5 3C0.5 1.61677 1.61677 0.5 3 0.5Z"
            fill="#002B4F"
            stroke="#002B4F"
          />
        </svg>
      </button>

      <nav className="hidden lg:block">
        <ul className="flex space-x-10 md:space-x-20 md:p-4 font-bold relative">
          {navConfig.map((section, index) => (
            <li key={index} className="relative">
              {section.items ? (
                <NavDropdownItem
                  title={section.title}
                  items={section.items}
                />
              ) : (
                <Link
                  href={section.path}
                  className="group w-full text-left flex justify-between items-center font-space-grotesk-semibold text-lg cursor-pointer text-[#002B4F] hover:text-[#FFB025]"
                >
                  <span className="transition border-b-2 border-transparent group-hover:border-[#FFB025] group-hover:text-[#FFB025]">
                    {section.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <NavMobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}

      <SponsorModal
        isOpen={isSponsorModalOpen}
        onClose={() => setIsSponsorModalOpen(false)}
      />

      {contactType && (
        <ContactFormModal
          type={contactType}
          onClose={() => setContactType(null)}
        />
      )}
    </header>
  );
}

export default Navbar;
