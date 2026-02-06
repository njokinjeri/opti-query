import { features } from "../../config/features.config";
import feature1Img from "../../assets/feature-1.webp";
import feature2Img from "../../assets/feature-2.webp";
import torus from "../../assets/abstract/torus.webp";
import cone from "../../assets/abstract/cone.webp";


export default function Features () {
    return (
        <section id="features" className="flex flex-col gap-10 items-center font-iter">
            <section className="flex flex-col items-center text-white">
                <h3 className="w-2/3 text-2xl tracking-wide font-medium text-center py-4 md:w-140 md:text-3xl">
                    Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
                </h3>
                <div className="max-w-7xl mx-auto pt-10 pb-20 flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <div className="w-[80%] md:max-w-80 h-96 flex flex-col justify-evenly items-center border border-white/20 rounded-xl">
                            <img src={torus} alt="" />
                            <div className="flex flex-col gap-4 px-6">
                                <h4 className="text-base font-semibold">SEO goal setting</h4>
                                <p className="text-gray-400">Helps you set and achieve SEO goals with guided assistance.</p>
                            </div>
                        </div>
                        <div className="relative w-[80%] h-96 flex items-center rounded-xl">
                            <img src={feature1Img} alt="" className="w-full h-full object-cover object-left rounded-xl"/>
                            <div className="absolute bottom-0 flex flex-col items-start gap-4 px-4 py-6">
                                <h4 className="text-base font-semibold">User-friendly dashboard</h4>
                                <p className="md:max-w-80 text-gray-400">Perform complex SEO audits and optimizations with a single click.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <div className="relative w-[80%] h-96 flex items-center rounded-xl">
                            <img src={feature2Img} alt="" className="w-full h-full object-cover object-left rounded-xl" />
                            <div className="absolute bottom-0 flex flex-col items-start gap-4 px-4 py-6">
                                <h4 className="text-base font-semibold">Visual reports</h4>
                                <p className="md:max-w-80 text-gray-400">Visual insights into your site's performance.</p>
                            </div>
                        </div>
                        <div className="w-[80%] md:max-w-80 h-96 flex flex-col justify-evenly items-center border border-white/20 rounded-xl">
                            <img src={cone} alt="" />
                            <div className="flex flex-col gap-4 px-6">
                                <h4 className="text-base font-semibold">Smart Keyword Generator</h4>
                                <p className="text-gray-400">Automatic suggestions and the best keywords to target.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-linear-to-r from-purple-dark-3 to-black text-white border border-purple-dark-3">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h3 className="text-4xl tracking-wide font-medium mb-12 text-center md:w-96 md:text-6xl md:text-left">
                        Elevate your SEO efforts
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 place-items-center md:place-items-start">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-start">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={feature.icon} alt={feature.heading} />
                                    <h4 className="font-bold">{feature.heading}</h4>
                                </div>
                                <p className="max-w-xs text-base/7 text-gray-400 font-light tracking-wide">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}