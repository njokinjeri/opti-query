import { useState } from "react";
import Logo from "../ui/Logo";
import DesktopNav from "../navigation/DesktopNav";
import MobileNav from "../navigation/MobileNav";
import { Menu } from 'lucide-react';
import JoinWaitlist from "../navigation/JoinWaitList";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center font-iter text-white/80 p-6 border-b border-white/20">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
            <Logo />
            <div  className="hidden md:flex items-center">
                <DesktopNav />
            </div>
            <div className="hidden md:flex">
                <JoinWaitlist />
            </div>
            <div className="md:hidden flex items-center space-x-6">
                <JoinWaitlist />
                <button onClick={() => setMobileOpen(!mobileOpen)}>
                    <Menu className="size-10"/>
                </button>
            </div>

            {mobileOpen && (
            <MobileNav
                ctaHref="#cta"
                onClose={() => setMobileOpen(false)}
                />
            )}
        </div>
    </header>
  );
}
