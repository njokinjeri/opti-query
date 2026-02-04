import NavLink from "../navigation/NavLink";

export default function JoinWaitlist() {
  return (
    <div className="border border-white/20 rounded-xl p-1.5 text-lg">
        <div  className="rounded-xl py-1.5 px-8
               bg-purple/40 shadow-[inset_0_0_16px_rgba(255,255,255,0.3)]
               text-white">
            <NavLink href="#cta">
                Join waitlist
            </NavLink>
        </div>
    </div>
  );
}
