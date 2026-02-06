import { Dot } from 'lucide-react';
import gridPattern from "../../assets/abstract/grid-pattern.png"
import blur from "../../assets/abstract/blur.png"
import shadow from "../../assets/abstract/shadow.png"

export default function CTA() {
    return (
        <section id="cta" className="w-full max-w-7xl mx-auto flex border border-white/20 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none">
                <img src={gridPattern} alt="" className="absolute inset-0 w-full h-full object-cover z-10" />
                <img src={shadow} alt="" className="absolute top-0 left-1/3 -translate-x-1/2 w-[120%] max-w-none z-5" />
                <img src={blur} alt="" className="absolute bottom-0 inset-x-0 w-full z-2" />
            </div>
            <div className="w-full flex flex-col items-center gap-8 py-16 z-50">
                <h1 className="max-w-80 text-4xl font-bold text-white text-center md:text-5xl md:w-80">AI-driven SEO for everyone.</h1>
                <form className="w-full max-w-80 md:max-w-lg flex flex-col gap-4 relative md:block">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Your Email..." 
                        className="w-full border border-white/20 p-3 text-white/60 rounded-lg"/>
                    <button 
                        type="submit" 
                        className="bg-white text-black font-bold p-2 rounded-lg cursor-pointer md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2"
                        >Join waitlist
                    </button>
                </form>
                <div className="flex items-center text-white/50 tracking-wide">
                    <p>No credit card required</p>
                    <span>< Dot /></span>
                    <p>7-days free trial</p>
                </div>
            </div>
        </section>
    )
    
};