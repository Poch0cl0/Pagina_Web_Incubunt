export type DesktopFooterProps = {
    NavigationMenu: React.ComponentType<{ className?: string }>;
    LocationIcon: React.ComponentType;
    contactInfo: {
        address: string;
        mapEmbedUrl: string;
        phone: string;
        email: string;
    };
    PhoneIcon: React.ComponentType;
    EmailIcon: React.ComponentType;
    SocialLinks: React.ComponentType<{ className?: string; classNameIcon?: string }>;
};

export type MobileFooterProps = {
    NavigationMenu: React.ComponentType<{ className?: string }>;
    LocationIconMobile: React.ComponentType<any>;
    contactInfo: {
        address: string;
        mapEmbedUrl: string;
        phone: string;
        email: string;
    };
    PhoneIconMobile: React.ComponentType<any>;
    EmailIconMobile: React.ComponentType<any>;
    SocialLinks: React.ComponentType<{ className?: string; classNameIcon?: string }>;
    ArrowRightIcon: React.ComponentType<{ className?: string }>;
    ArrowDownIcon: React.ComponentType<{ className?: string }>;
};