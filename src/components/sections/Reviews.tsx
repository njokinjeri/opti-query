import { useState, useEffect } from "react";
import { reviews } from "../../config/reviews.config";
import SubtleBlur from "../../assets/abstract/subtle-blur.png";
import LineImg1 from "../../assets/abstract/Line 1.png"
import LineImg2 from "../../assets/abstract/Line 2.png";

export default function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeReview = reviews[activeIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reviews.length);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="reviews" className="w-full max-w-7xl mx-auto flex flex-col items-center gap-4 text-white py-30 overflow-hidden">
            <div className="flex flex-col items-center gap-4">
                <h3 className="text-6xl font-bold">Our clients</h3>
                <p className="w-2/3 text-xl text-center py-6">Hear firsthand how our solutions have boosted online success for users like you</p>
            </div>
            <div 
                key={activeIndex}
                className="
                    flex flex-col justify-center items-center gap-6 text-center
                    md:flex-row md:justify-center
                    animate-review-slide"
                >
                <div className="w-65 md:w-[320px] flex justify-center items-center relative md:py-10">
                    <img src={SubtleBlur} alt="" className="absolute w-[300%] max-w-none object-contain pointer-events-none z-0" />
                    <div className="relative flex justify-center items-center py-6">
                        <img src={LineImg1} className="absolute -top-4 rotate-90  opacity-60 md:-top-46 md:-right-30 md:h-200" alt="" />
                        <img src={LineImg2} className="absolute -bottom-4 rotate-90 opacity-60 md:bottom-4 md:-top-94 md:-right-30 md:h-200" alt="" />
                        <img src={LineImg1} className="absolute left-[-0.05rem] top-1/2 -translate-y-1/2 rotate-0 h-[160%] opacity-40" alt="" />
                        <img src={LineImg2} className="absolute right-[-0.05rem] top-1/2 -translate-y-1/2 rotate-0 h-[160%] opacity-40" alt="" />
                        <img
                            src={activeReview.avatar}
                            alt={activeReview.name}
                            className="size-40 md:size-48 rounded-3xl object-cover relative z-20"
                        />
                    </div>
                </div>    
                <div className="w-full flex flex-col items-center md:items-start gap-4 z-30">
                    <p className="w-80 text-center md:text-left text-xl/8 text-white/90 ">
                        “{activeReview.text}”
                    </p>
                    <div className="flex flex-col gap-2 items-center md:items-start text-white/50">
                        <span className="text-white font-medium">
                            {activeReview.name}
                        </span>
                        <span>
                            {activeReview.role} @ {activeReview.company}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}