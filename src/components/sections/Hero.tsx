import heroFeature from "../../assets/hero-image.webp";
import heroShade from "../../assets/abstract/hero-shade.png";
import heroMask from "../../assets/abstract/hero-mask2.png";

export default function Hero() {
    return (
        <section className="w-full flex flex-col items-center gap-4 text-white font-iter"
                style={{
                    backgroundImage: `url(${heroMask})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
        >
            <div className="flex items-center gap-2 bg-black text-white border border-white/20 rounded-4xl mt-20 py-2.5 px-8">
                <span className="bg-purple text-sm text-black font-medium py-1 px-1.5 rounded-xl">New</span>
                <p className="text-purple">Latest integration just arrived</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-5xl font-bold tracking-wide py-4 text-center md:text-6xl lg:text-7xl">Boost your 
                    <br />
                    <span className="bg-linear-to-b from-white from-30% to-light-purple to-60% bg-clip-text text-transparent">
                        rankings with AI.
                    </span>
                </h2>
                <p className="w-[80%] md:w-130 text-xl text-center py-4">Elevate your site's visibility effortlessly with AI, where smart technology
                    meets user-friendly SEO tools
                </p>
                <div className="border border-white/10 rounded-2xl p-2 m-4">
                    <button className="bg-white text-black rounded-lg px-3 py-3 hover:bg-purple hover:text-white cursor-pointer">Start for free</button>
                </div>
            </div>
            <div className="w-[80%] max-w-4xl object-contain mx-auto group">
                <div className="bg-linear-to-b from-[#0D0718] via-[#0F081B] to-[0B0614] p-2 rounded-2xl relative">
                    <div 
                        className="absolute inset-30 bg-purple blur-[200px] rounded-full 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-600 
                                    pointer-events-none" 
                                    aria-hidden="true"></div>
                    <img src={heroFeature} alt="hero analytics" className="w-full object-contain relative z-10"/>
                    <img src={heroShade} alt="" className="absolute bottom-0 left-0 w-full pointer-events-none z-20"/>
                </div>
            </div>
        </section>
    )
}