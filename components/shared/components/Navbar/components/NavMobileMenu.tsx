"use client";
import { useState } from "react";
import { navConfig } from "../data/navConfig";
import NavDropdownItem from "./NavDropdownItem";

interface Props {
  onClose: () => void;
}

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const handleToggleDropdown = (title: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const handleCloseAll = () => setOpenDropdowns([]);

  const handleNavigate = (path?: string) => {
    if (path) {
      console.log("Navegando a:", path);
    }
    onClose();
    handleCloseAll();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-[#002B4F] via-[#04477e] to-[#0452c0] text-white z-50 p-6 overflow-y-auto">
      <div className="flex items-center justify-between w-full h-auto relative">
        <img
          src="/logos/logo-white.png"
          alt="Logo Blanco"
          className="w-32 h-auto"
        />

        {/* Botón X (Cierre) para móviles y tabletas, movido a la derecha */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:right-[-10px] md:right-[-15px] lg:right-[-20px] w-8 h-8 z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 56" fill="none">
            <path d="M37.4718 16.4718C38.839 15.1046 38.839 12.8843 37.4718 11.5171C36.1046 10.1499 33.8843 10.1499 32.5171 11.5171L20.9999 23.0452L9.47178 11.528C8.10459 10.1608 5.88428 10.1608 4.51709 11.528C3.1499 12.8952 3.1499 15.1155 4.51709 16.4827L16.0452 27.9999L4.52803 39.528C3.16084 40.8952 3.16084 43.1155 4.52803 44.4827C5.89522 45.8499 8.11553 45.8499 9.48272 44.4827L20.9999 32.9546L32.528 44.4718C33.8952 45.839 36.1155 45.839 37.4827 44.4718C38.8499 43.1046 38.8499 40.8843 37.4827 39.5171L25.9546 27.9999L37.4718 16.4718Z" fill="white" />
          </svg>
        </button>
      </div>

      <ul className="space-y-6 mt-15">
        {navConfig.map((section, index) => {
          const hasSubItems = Array.isArray(section.items) && section.items.length > 0;
          return (
            <li key={index} className="font-bold">
              <NavDropdownItem
                title={section.title}
                items={section.items ?? []}
                mode="mobile"
                isOpen={openDropdowns.includes(section.title)}
                onToggle={() => {
                  if (hasSubItems) {
                    handleToggleDropdown(section.title);
                  } else {
                    handleNavigate(section.items && section.items.length > 0 ? section.items[0]?.path : undefined);
                  }
                }}
                onCloseAll={handleCloseAll}
                onNavigate={(path) => handleNavigate(path)}
              />
            </li>
          );
        })}
      </ul>

      <div className="mt-10 text-center">
        <a
          href="/unirse"
          className="inline-block bg-[#FFB025] text-white uppercase px-24 py-3 text-[20px] rounded-full font-bold"
        >
          ¡UNIRSE!
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
