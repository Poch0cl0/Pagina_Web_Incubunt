import { useState, useRef } from "react";

interface NavItem {
    label: string;
    path: string;
}

interface NavDropdownItemProps {
    title: string;
    items: NavItem[];
    mode?: "desktop" | "mobile";
    isOpen?: boolean;
    onToggle?: () => void;
    onCloseAll?: () => void;
    onNavigate?: (path: string) => void;
}

const NavDropdownItem: React.FC<NavDropdownItemProps> = ({
    title,
    items,
    mode = "desktop",
    isOpen = false,
    onToggle,
    onCloseAll,
    onNavigate,
}) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (mode !== "desktop") return;
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleMouseLeave = () => {
        if (mode !== "desktop") return;
        timeoutRef.current = window.setTimeout(() => setOpen(false), 100);
    };

    const handleClick = () => {
        if (mode === "mobile" && onToggle) {
            onToggle();
        }
    };

    const dropdownOpen = mode === "desktop" ? open : isOpen;

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={handleClick}
                className={`group w-full text-left flex justify-between items-center font-space-grotesk-semibold text-lg cursor-pointer
    ${mode === "mobile" ? "text-white" : "text-[#002B4F]"}
    hover:text-[#FFB025]
  `}
            >
                <span
                    className={`transition border-b-2 border-transparent
    ${mode === "desktop" ? "group-hover:border-[#FFB025] group-hover:text-[#FFB025]" : ""}
    ${mode === "mobile" && dropdownOpen ? "border-[#FFB025] text-[#FFB025] underline" : ""}
  `}
                >
                    {title}
                </span>
                {mode === "mobile" && items.length > 0 && (
                    <span className="ml-2">
                        {dropdownOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                                <path d="M11.7355 0.50212C11.0521 -0.167373 9.94242 -0.167373 9.25909 0.50212L0.512508 9.07164C-0.170818 9.74113 -0.170818 10.8284 0.512508 11.4979C1.19584 12.1674 2.30556 12.1674 2.98888 11.4979L10.5 4.13881L18.0111 11.4925C18.6945 12.162 19.8042 12.162 20.4875 11.4925C21.1708 10.823 21.1708 9.73577 20.4875 9.06628L11.7409 0.496764L11.7355 0.50212Z" fill="#FFB025" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
                                <path d="M9.26453 11.4979C9.94786 12.1674 11.0576 12.1674 11.7409 11.4979L20.4875 2.92836C21.1708 2.25887 21.1708 1.17161 20.4875 0.50212C19.8042 -0.167373 18.6944 -0.167373 18.0111 0.50212L10.5 7.86119L2.98886 0.507475C2.30553 -0.162018 1.19581 -0.162018 0.512483 0.507475C-0.170844 1.17697 -0.170844 2.26423 0.512483 2.93372L9.25907 11.5032L9.26453 11.4979Z" fill="white" />
                            </svg>
                        )}
                    </span>

                )}

            </button>

            {dropdownOpen && items.length > 0 && (
                <div
                    className={`${mode === "desktop"
                        ? "absolute left-1/2 -translate-x-1/2 mt-2 w-64 px-2 pt-7 pb-5 shadow-lg z-20 bg-white rounded-b-2xl"
                        : "mt-2 ml-4"
                        }`}
                >
                    <ul className={`${mode === "mobile" ? "space-y-2 text-sm" : ""}`}>
                        {items.map((item) => (
                            <li key={item.path}>
                                <a
                                    href={item.path}
                                    onClick={(e) => {
                                        if (onNavigate) {
                                            e.preventDefault();
                                            if (mode === "mobile") {
                                                if (onCloseAll) onCloseAll();
                                            }
                                            onNavigate(item.path);
                                        }
                                    }}
                                    className={`block px-4 pt-2 no-underline transition text-[15px] font-bold
                    ${mode === "mobile"
                                            ? "text-[#A5B0C4] font-bold"
                                            : "text-[#848C98] font-semibold hover:text-[#FFB025]"
                                        }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavDropdownItem;
