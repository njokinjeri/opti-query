import Logo from "../ui/Logo"
import Socials from "../ui/Socials"
import { footerGroups } from "../../config/footer.config"

export default function Footer() {
    return (
        <footer className="w-full flex border-t border-white/20 select-none mt-10">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row">
                <section className="w-full flex justify-between md:flex-col px-6 py-10 ">
                    <div className="flex items-center gap-2 text-white">
                        <Logo />
                        <h3>Opti Query</h3>
                    </div>
                    <Socials />
                </section>
                <section className="w-full flex justify-center md:justify-end gap-8 px-6 pb-8 md:py-16">
                    {footerGroups.map((group) => (
                        <div key={group.id} className="flex flex-col items-start gap-16 md:flex-row">
                            {group.sections.map((section) => (
                                <div key={section.title} className="h-1/3">
                                    <h4 className="text-white mb-4">{section.title}</h4>
                                    <ul className="flex flex-col gap-6 text-white/25">
                                        {section.items.map((item) => { 
                                            if (typeof item === "string") {
                                                return (
                                                    <li key={item} className="text-sm hover:text-white cursor-pointer">
                                                        {item}
                                                    </li>
                                                );
                                            }
                                            return (
                                                <li key={item.href}>
                                                    <a 
                                                        href={item.href}
                                                        className="hover:text-purple-dark-2 hover:underline decoration-wavy underline-offset-8"
                                                        >{item.label}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>
            </div> 
        </footer>
    )
}