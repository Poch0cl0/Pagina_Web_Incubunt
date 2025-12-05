export interface HeroMobileProps {
  onVolunteerClick: () => void;
  onSponsorClick: () => void;
}

export interface HeroDesktopProps {
  onVolunteerClick: () => void;
  onSponsorClick: () => void;
}

export interface HeroButtonsProps {
  onVolunteerClick: () => void;
  onSponsorClick: () => void;
  size?: "small" | "large";
}