import { navigationItems } from "../data/navigation-items";

export const NavigationMenu = ({ className }: { className?: string }) => (
    <nav className={className}>
        {navigationItems.map((item, index) => (
            <a key={index} href="#" className="text-white/90 hover:text-white transition-colors duration-200 text-[14px] xl:text-[15px] leading-[16px] xl:leading-[18px] font-bold hover:underline text-left">
                {item}
            </a>
        ))}
    </nav>
);
