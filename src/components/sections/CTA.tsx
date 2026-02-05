import { Dot } from 'lucide-react';

export default function CTA() {
    return (
        <section className="w-full border border-white/20 rounded-xl">
            <div className="flex flex-col items-center gap-8 py-8">
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