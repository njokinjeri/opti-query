import { useState } from "react";
import { Check } from "lucide-react";
import { pricingPlans } from "../../config/pricing.config";
import blurDot from "../../assets/abstract/blur-dot.png";
import grid from "../../assets/abstract/grid-pattern.png";
import shadow from "../../assets/abstract/shadow.png";

export default function Pricing() {
  const [billing, setBilling] = useState("yearly");

  return (
    <section 
        className="max-w-7xl mx-auto px-6 pb-20 text-white relative"
        style={{
            backgroundImage: `url(${blurDot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
    >
        <div className="flex flex-col items-center text-center mb-12">
            <h3 className="text-6xl font-semibold mb-4">Pricing</h3>
            <p className="w-80 text-lg text-gray-200">
                Choose the right plan to meet your SEO needs and start optimizing today
            </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12 z-50">
            <button
                onClick={() => setBilling("monthly")}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                billing === "monthly"
                    ? "bg-white text-black"
                    : "text-gray-400 border border-white/20"
                }`}
            >
                Monthly
            </button>
            <button
                onClick={() => setBilling("yearly")}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer ${
                billing === "yearly"
                    ? "bg-white text-black"
                    : "text-gray-400 border border-white/20"
                }`}
            >
            Yearly <span className="text-xs">(discounted)</span>
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => {
                const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

                const isPro = plan.id === "pro";

                return (
                    <div
                        key={plan.id}
                        className={`flex flex-col outline rounded-xl py-8 px-6 relative overflow-hidden
                                    ${
                                        isPro ? "outline-purple" : "outline-white/10"
                                    }`}
                        style = {isPro ? {
                            backgroundImage: `url(${grid}), url(${shadow})`,
                            backgroundSize: '100% 50%, cover',
                            backgroundPosition: 'bottom center, top center',
                            backgroundRepeat: 'no-repeat, no-repeat'
                        }:{}
                        }
                    >
                        <h4 className="text-3xl font-semibold mb-2">{plan.name}</h4>

                        <div className="flex items-start gap-1 mb-6 border-b border-white/10">
                            <span className="text-xl font-bold text-gray-200 mb-6"> ${price}
                                <span className="text-sm text-gray-400">/mo</span>
                            </span>
                        </div>

                        <ul className="flex flex-col gap-3 mb-8">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                    <Check size={16} className="text-purple-400" />
                                    <span className="text-sm text-gray-300 md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={`mt-auto w-full py-3 rounded-lg border border-white/30 transition-colors
                                            ${
                                                isPro ? "bg-purple text-white hover:bg-white hover:text-black" : "hover:bg-purple hover:text-white"
                                            }
                        `}
                        >
                            Join waitlist
                        </button>
                    </div>
                );
            })}
        </div>
    </section>
  );
}