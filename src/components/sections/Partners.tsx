import { partnersLogos } from "../../config/partners.config";

export default function Partners() {
    return (
        <section id="partners" className="w-full max-w-7xl mx-auto flex flex-col items-center gap-6 py-10 overflow-hidden">
            <h3 className="text-lg text-white/80 py-6">Trusted by the world's most innovative teams</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {partnersLogos.map((logo, index) => (
                    <img 
                        key={index}
                        src={logo} 
                        alt="Partner logo" 
                        className="border border-white/20 rounded-md p-6"
                    />
                ))}
            </div>
        </section>
    )
}