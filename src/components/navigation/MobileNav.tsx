import NavItems from "./NavItems";
import { X } from 'lucide-react';

type MobileNavProps = {
  ctaHref: string;      
  onClose: () => void;  
};

export default function MobileNav({ onClose }: MobileNavProps) {
  return (
    <div className="fixed top-0 right-0 h-full w-3/4 bg-black/75 backdrop-blur-md shadow-xl z-200 flex flex-col md:hidden">
        <div className="absolute inset-0 bg-[url('/noise.jpg')] opacity-15 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t
                        from-purple/20 via-purple/10 to-transparent animate-rise"></div>
        <div className="flex justify-end p-8">
            <button onClick={onClose} aria-label="close-menu">
                <X className="size-8 text-white hover:text-purple"/>
            </button>
        </div>
        <nav className="flex-1 flex flex-col justify-start items-center pt-20 text-white text-2xl">
            <NavItems 
                onClick={onClose} 
                className="hover:underline decoration-double underline-offset-8 decoration-purple"
            />
        </nav>
    </div>
    );
}
