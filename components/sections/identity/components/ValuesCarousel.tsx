"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import ValueCard from "./ValueCard";

interface ValuesCarouselProps {
  valores: any[];
}

export default function ValuesCarousel({ valores }: ValuesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsToShow = 2;
  const maxIndex = Math.max(0, valores.length - itemsToShow);

  // Manejar scroll táctil
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollTop = container.scrollTop;
    const itemHeight = container.scrollHeight / valores.length;
    const newIndex = Math.min(
      Math.max(0, Math.round(scrollTop / itemHeight)),
      maxIndex
    );

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  }, [currentIndex, maxIndex, valores.length]);

  // Scroll programático cuando cambia el índice por dots
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const itemHeight = container.scrollHeight / valores.length;
      const scrollTop = index * itemHeight;

      container.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    },
    [valores.length]
  );

  // Configurar scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Event listener pasivo para mejor performance
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="relative">
      {/* Scrollable Container - Scroll táctil */}
      <div
        ref={scrollRef}
        className="overflow-y-auto overflow-x-hidden scrollbar-hide snap-y snap-mandatory"
        style={{
          height: "400px", // Altura fija para mobile
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        <div className="flex flex-col gap-8 py-4">
          {valores.map((valor) => (
            <div
              key={valor.numero}
              className="flex-shrink-0 snap-start"
              style={{ minHeight: "180px" }} // Más espacio entre cards
            >
              <ValueCard
                numero={valor.numero}
                titulo={valor.titulo}
                descripcion={valor.descripcion}
                icon={valor.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator - Mejorado para touch */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFB025] focus:ring-offset-1 touch-manipulation ${index === currentIndex
                ? "bg-[#FFB025] scale-125"
                : "bg-gray-300 hover:bg-gray-400"
              }`}
            aria-label={`Ver ${index === 0
                ? "Innovación y Compromiso"
                : "Creatividad y Excelencia"
              }`}
            type="button"
          />
        ))}
      </div>

      {/* Información adicional para lectores de pantalla */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {currentIndex === 0
          ? "Mostrando: Innovación y Compromiso"
          : "Mostrando: Creatividad y Excelencia"}
      </div>

      {/* Estilos para ocultar scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
