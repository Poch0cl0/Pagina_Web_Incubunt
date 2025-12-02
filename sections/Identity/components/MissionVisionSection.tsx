"use client";

import React, { useRef, useState, useCallback } from "react";
import type { ReactNode } from "react";

interface MissionVisionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  bgClass?: string;
}

/* ---------- MOBILE/TABLET: Card con flip por TOUCH Y PROXIMIDAD ---------- */
function MissionVisionCardFlip({
  title,
  description,
  icon,
  bgClass = "",
}: MissionVisionCardProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const isVision = title === "VISIÓN";

  // Handle both touch and mouse interactions
  const handleInteractionStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      setIsFlipped(true);
    },
    []
  );

  const handleInteractionEnd = useCallback(() => {
    // Delay to allow reading the back content
    setTimeout(() => {
      setIsFlipped(false);
    }, 3000);
  }, []);

  // Tilt effect for mouse only (not touch to avoid conflicts)
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if ("ontouchstart" in window) return; // Skip on touch devices

    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;
    const ry = Math.max(Math.min(px * 8, 12), -12);
    const rx = Math.max(Math.min(-py * 8, 12), -12);
    setTilt({ rx, ry });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
    setIsFlipped(false);
  }, []);

  const baseRotateY = isFlipped ? 180 : 0;
  const transformStyle = `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${
    baseRotateY + tilt.ry * 0.1
  }deg)`;

  const visionBg =
    "linear-gradient(90deg, rgba(0,43,79,0.95) 0%, rgba(0,99,181,0.95) 100%)";
  const missionBg = "rgba(35,38,47,1)";

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-2xl cursor-pointer touch-manipulation"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onMouseEnter={handleInteractionStart}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleInteractionStart(e as any);
          handleInteractionEnd();
        }
      }}
    >
      {/* Card visible */}
      <div
        className="relative z-10 w-full h-full rounded-2xl"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 600ms cubic-bezier(.25,.46,.45,.94)",
          transform: transformStyle,
        }}
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-2 rounded-2xl ${
            !isVision ? bgClass : ""
          }`}
          style={{
            backfaceVisibility: "hidden",
            background: isVision ? visionBg : missionBg,
          }}
        >
          <h3 className="text-white font-space-grotesk font-bold text-[10px] xs:text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
            {title}
          </h3>
          <div className="flex items-center justify-center">{icon}</div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: isVision ? visionBg : missionBg,
          }}
        >
          <p className="text-white text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs leading-tight px-1 sm:px-2 text-center font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- DESKTOP: Card sin flip (con mayor altura) ---------- */
function MissionVisionCardDesktop({
  title,
  description,
  icon,
}: MissionVisionCardProps) {
  const isVision = title === "VISIÓN";
  const cardStyle = isVision
    ? {
        background:
          "linear-gradient(90deg, rgba(0,43,79,1) 0%, rgba(0,99,181,1) 100%)",
      }
    : { background: "#23262F" };

  return (
    <article
      className="rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col h-full relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] w-full min-h-[240px] sm:min-h-[260px] lg:min-h-[280px]"
      style={cardStyle}
    >
      <div className="flex flex-col h-full relative z-10">
        <header className="mb-4 sm:mb-6">
          <h3 className="text-white font-space-grotesk font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight">
            {title}
          </h3>
        </header>

        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 md:gap-6">
          <div className="flex-1">
            <p className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              {description}
            </p>
          </div>
          <div className="flex-shrink-0 self-center sm:self-start mt-2 flex justify-center sm:block">
            {icon}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </article>
  );
}

/* ---------- Sección ---------- */
interface MissionVisionSectionProps {
  missionIcon: ReactNode;
  visionIcon: ReactNode;
}

export default function MissionVisionSection({
  missionIcon,
  visionIcon,
}: MissionVisionSectionProps) {
  return (
    <>
      {/* Desktop >= 1024px */}
      <div className="hidden xl:flex xl:flex-col xl:gap-6 2xl:gap-8 w-full max-w-none">
        <MissionVisionCardDesktop
          title="MISIÓN"
          description="Fomentar el desarrollo de ideas empresariales contribuyendo activamente al ecosistema de innovación y emprendimiento desde una perspectiva formativa, inclusiva y sin fines de lucro."
          icon={missionIcon}
        />
        <MissionVisionCardDesktop
          title="VISIÓN"
          description="Ser reconocidos, al 2026, como el principal centro universitario de innovación y formación empresarial en la región, impactando significativamente en la generación de iniciativas emprendedoras"
          icon={visionIcon}
        />
      </div>

      {/* Mobile & Tablet - Responsivo mejorado */}
      <div className="xl:hidden w-full">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <MissionVisionCardFlip
            title="MISIÓN"
            description="Fomentar el desarrollo de ideas empresariales contribuyendo activamente al ecosistema de innovación y emprendimiento desde una perspectiva formativa, inclusiva y sin fines de lucro."
            icon={missionIcon}
            bgClass="bg-[#23262F]"
          />
          <MissionVisionCardFlip
            title="VISIÓN"
            description="Ser reconocidos, al 2026, como el principal centro universitario de innovación y formación empresarial en la región, impactando significativamente en la generación de iniciativas emprendedoras"
            icon={visionIcon}
          />
        </div>
      </div>

      <style>{`
        /* 3D y compatibilidad */
        .flip-inner, .flip-face { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        html, body, #root { box-sizing: border-box; }
        *, *::before, *::after { box-sizing: inherit; }
      `}</style>
    </>
  );
}
