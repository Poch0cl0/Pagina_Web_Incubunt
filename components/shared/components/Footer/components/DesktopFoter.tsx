import React from "react";
import type { DesktopFooterProps } from "../types/FooterProps";

export const DesktopFooter: React.FC<DesktopFooterProps> = ({
    NavigationMenu,
    LocationIcon,
    contactInfo,
    PhoneIcon,
    EmailIcon,
    SocialLinks,
}) => {
    return (
        <div className="hidden lg:block">
            <div className="relative min-h-[554px] px-4 xl:px-[53px] py-[33px]">
                <div className="flex gap-4 xl:gap-[46px] h-full max-w-[1920px] mx-auto">
                    {/* Left Container: Navigation + Contact Info */}
                    <div
                        className="bg-gradient-to-b from-[rgba(30,135,215,0.5)] to-[rgba(16,71,113,0.5)] rounded-[30px] p-6 xl:p-8 flex-1"
                        style={{ minHeight: "476px" }}
                    >
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8 h-full">
                            {/* Column 1: Navigation */}
                            <div className="flex flex-col">
                                <h3 className="text-white uppercase tracking-wider mb-6 xl:mb-8 text-[18px] xl:text-[20px] leading-[24px] xl:leading-[26px] font-bold text-left">
                                    Explora INCUBUNT
                                </h3>
                                <NavigationMenu
                                    className="flex flex-col gap-6 xl:gap-8 text-left"
                                />
                            </div>

                            {/* Column 2: Contact Info */}
                            <div className="flex flex-col">
                                <h3 className="text-white uppercase tracking-wider mb-6 xl:mb-8 text-[18px] xl:text-[20px] leading-[24px] xl:leading-[26px] font-bold text-left">
                                    CONTÁCTANOS TAMBIÉN EN:
                                </h3>

                                <div className="space-y-6 text-left">
                                    {/* Location */}
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 flex-shrink-0">
                                                <LocationIcon />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/90 text-[14px] xl:text-[15px] leading-[16px] xl:leading-[18px] font-bold mb-2 text-left">
                                                    Local
                                                </p>
                                                <p className="text-white/90 text-[13px] xl:text-[15px] leading-[15px] xl:leading-[18px] font-medium text-left">
                                                    {contactInfo.address}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Google Map Embed */}
                                        <div className="w-full h-[100px] xl:h-[120px] rounded-lg overflow-hidden">
                                            <iframe
                                                src={contactInfo.mapEmbedUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Ubicación INCUBUNT"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <PhoneIcon />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/90 text-[14px] xl:text-[15px] leading-[16px] xl:leading-[18px] font-bold mb-1 text-left">
                                                Central Telefónica
                                            </p>
                                            <a
                                                href={`tel:${contactInfo.phone}`}
                                                className="text-white/90 text-[14px] xl:text-[15px] leading-[17px] xl:leading-[19px] font-bold hover:text-white transition-colors duration-200 text-left"
                                            >
                                                {contactInfo.phone}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <EmailIcon />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/90 text-[14px] xl:text-[15px] leading-[17px] xl:leading-[19px] font-bold mb-1 text-left">
                                                Email
                                            </p>
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className="text-white/90 text-[14px] xl:text-[15px] leading-[17px] xl:leading-[19px] font-bold hover:text-white transition-colors duration-200 text-left"
                                            >
                                                {contactInfo.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Container: Connect Section */}
                    <div
                        className="bg-gradient-to-b from-[rgba(30,135,215,0.5)] to-[rgba(16,71,113,0.5)] rounded-[30px] p-6 xl:p-8 w-full lg:w-[400px] xl:w-[554px]"
                        style={{ minHeight: "476px" }}
                    >
                        <div className="text-center flex flex-col justify-center h-full">
                            {/* Logo */}
                            <div className="mb-6 xl:mb-8">
                                <img
                                    src="/logos/logo-white.png"
                                    alt="INCUBUNT Logo"
                                    className="mx-auto rounded-[10px] object-contain w-[200px] xl:w-[258px] h-[80px] xl:h-[102px]"
                                />
                            </div>

                            <h3 className="text-[#97B4C7] uppercase tracking-wider mb-6 xl:mb-8 text-[20px] xl:text-[25px] leading-[26px] xl:leading-[32px] font-bold text-center">
                                CONECTA CON NOSOTROS
                            </h3>

                            <SocialLinks
                                className="flex justify-center gap-4 xl:gap-6"
                                classNameIcon="w-[48px] xl:w-[54px] h-[48px] xl:h-[54px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}