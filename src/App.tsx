import Layout from "../src/components/layout/Layout"
import Hero from "./components/sections/Hero"
import Partners from "./components/sections/Partners"
import Features from "./components/sections/Features"
import Reviews from "./components/sections/Reviews"
import CTA from "./components/sections/CTA"
import Pricing from "./components/sections/Pricing"

export default function App () {
    return (
        <Layout>
            <Hero />
            <Partners />
            <Features />
            <Reviews />
            <Pricing />
            <CTA />
        </Layout>
    )
}

