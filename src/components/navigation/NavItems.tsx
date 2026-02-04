import type { NavItem } from "../../types/navigation";
import NavLink from "./NavLink";

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Partners", href: "#partners" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

type NavItemsProp = {
    onClick?: () => void;
    className?: string;
};

export default function NavItems({ onClick, className }: NavItemsProp) {
  return (
    <ul className="flex flex-col md:flex-row gap-10">
      {navItems.map((item) => (
        <li key={item.href}>
          <NavLink
            href={item.href}
            onClick={onClick}
            className={className}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
