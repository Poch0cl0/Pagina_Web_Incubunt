"use client";

import { useState } from "react";
import type { MobileFooterProps } from "../types/FooterProps";
import Image from 'next/image';

export const MobileFooter = ({
    NavigationMenu,
    LocationIconMobile,
    contactInfo,
    PhoneIconMobile,
    EmailIconMobile,
    SocialLinks,
    ArrowRightIcon,
    ArrowDownIcon,
}: MobileFooterProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="lg:hidden">
            <div className="min-h-[300px] px-4 sm:px-6 py-6 space-y-4">
                {/* Logo and Social Connect Section */}
                <div className="bg-linear-to-b from-[rgba(30,135,215,0.5)] to-[rgba(16,71,113,0.5)] rounded-[30px] p-6">
                    <div className="text-center">
                        <div className="mb-2">
                            <Image
                                src="/logos/logo-white.png"
                                alt="INCUBUNT Logo"
                                width={160}
                                height={80}
                                className="w-36 sm:w-40 h-20 sm:h-24 object-contain mx-auto"
                            />
                        </div>

                        <h3 className="text-[#97B4C7] uppercase tracking-wider mb-2 text-[18px] sm:text-[20px] leading-[24px] sm:leading-[26px] font-bold text-center">
                            CONECTA CON NOSOTROS
                        </h3>

                        <SocialLinks
                            className="flex justify-center gap-4"
                            classNameIcon="w-[48px] sm:w-[54px] h-[48px] sm:h-[54px]"
                        />
                    </div>
                </div>

                {/* Combined Navigation and Contact Section */}
                <div className="bg-gradient-to-b from-[rgba(30,135,215,0.5)] to-[rgba(16,71,113,0.5)] rounded-[30px] p-6">
                    {/* Navigation Section */}
                    <div className="">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full flex items-center justify-center rounded-lg"
                            aria-expanded={isExpanded}
                            aria-controls="mobile-navigation"
                        >
                            <span className="text-white uppercase tracking-wider text-[18px] sm:text-[20px] leading-[24px] sm:leading-[26px] font-bold text-center mr-4">
                                Explora INCUBUNT
                            </span>
                            {isExpanded ? (
                                <ArrowDownIcon className="w-[30px] sm:w-[34px] h-[31px] sm:h-[35px] transform rotate-180 transition-transform duration-200" />
                            ) : (
                                <ArrowRightIcon className="w-[30px] sm:w-[34px] h-[29px] sm:h-[33px] transition-transform duration-200" />
                            )}
                        </button>

                        {isExpanded && (
                            <div
                                id="mobile-navigation"
                                className="mt-6 pt-6 border-t border-white/20"
                            >
                                <NavigationMenu
                                    className="flex flex-col gap-4 mb-6 text-left"
                                />

                                {/* Contact Section */}
                                <div className="pt-6 border-t border-white/20">
                                    <h3 className="text-white uppercase tracking-wider mb-6 text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] font-bold text-left">
                                        CONTÁCTANOS TAMBIÉN EN:
                                    </h3>

                                    <div className="space-y-6 text-left">
                                        {/* Location */}
                                        <div>
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="mt-1 flex-shrink-0">
                                                    <LocationIconMobile />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-white/90 text-[13px] sm:text-[14px] leading-[15px] sm:leading-[16px] font-bold mb-2 text-left">
                                                        Local
                                                    </p>
                                                    <p className="text-white/90 text-[12px] sm:text-[13px] leading-[14px] sm:leading-[15px] font-medium text-left">
                                                        {contactInfo.address}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Google Map Embed */}
                                            <div className="w-full h-28 sm:h-32 rounded-[15px] overflow-hidden">
                                                <iframe
                                                    src={contactInfo.mapEmbedUrl}
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    title="Ubicación INCUBUNT"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0">
                                                <PhoneIconMobile />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/90 text-[13px] sm:text-[14px] leading-[15px] sm:leading-[16px] font-bold mb-1 text-left">
                                                    Central Telefónica
                                                </p>
                                                <a
                                                    href={`tel:${contactInfo.phone}`}
                                                    className="text-white/90 text-[13px] sm:text-[14px] leading-[15px] sm:leading-[17px] font-bold hover:text-white transition-colors duration-200 text-left"
                                                >
                                                    {contactInfo.phone}
                                                </a>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0">
                                                <EmailIconMobile />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/90 text-[13px] sm:text-[14px] leading-[15px] sm:leading-[17px] font-bold mb-1 text-left">
                                                    Email
                                                </p>
                                                <a
                                                    href={`mailto:${contactInfo.email}`}
                                                    className="text-white/90 text-[13px] sm:text-[14px] leading-[15px] sm:leading-[17px] font-bold hover:text-white transition-colors duration-200 text-left"
                                                >
                                                    {contactInfo.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
