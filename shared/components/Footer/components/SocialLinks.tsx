import { socialLinks } from "../data/social-links";

export const SocialLinks = ({ className, classNameIcon }: { className?: string, classNameIcon?: string }) => (
  <div className={className ?? "flex justify-center gap-4"}>
    {socialLinks.map((social, index) => {
      const IconComponent = social.icon;
      return (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-200"
          aria-label={social.label}
        >
          <IconComponent className={classNameIcon} />
        </a>
      );
    })}
  </div>
);
