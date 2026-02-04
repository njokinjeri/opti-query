import NavItems from "./NavItems";

export default function DesktopNav() {
  return (
    <nav className="border border-white/20 rounded-4xl py-3.5 px-12">
        <NavItems 
          className="hover:text-purple"
        />
    </nav>
  );
}
