import gaugeImg from "../assets/icons/gauge.png";
import listImg from "../assets/icons/list-checks-icon.png";
import wandImg from "../assets/icons/magic-wand-icon.png";
import chartImg from "../assets/icons/chart-line.png";
import targetImg from "../assets/icons/target.png";
import cursorImg from "../assets/icons/cursor-click.png";
import sparkleImg from "../assets/icons/sparkle.png";
import bellImg from "../assets/icons/bell-ringing.png";
import filesImg from "../assets/icons/files .png";

export type Features = {
    id: string;
    heading: string;
    text: string;
    icon: string;
}

export const features: Features[] = [
    {
        id: "dashboard",
        heading: "User-friendly dashboard",
        text: "Perform complex SEO audits and optimizations with a single click.",
        icon: gaugeImg,
    },
    {
        id: "content-evaluation",
        heading: "Content evaluation",
        text: "Simple corrections for immediate improvements.",
        icon: listImg,
    },
    {
        id: "link-optimization",
        heading: "Link Optimization Wizard",
        text: "Guides you through the process of creating and managing links.",
        icon: wandImg,
    },
    {
        id: "visual-reports",
        heading: "Visual reports",
        text: "Visual insights into your site's performance.",
        icon: chartImg,
    },
    {
        id: "seo-goals",
        heading: "SEO goal setting",
        text: "Helps you set and achieve SEO goals with guided assistance.",
        icon: targetImg,
    },
    {
        id: "one-click-optimization",
        heading: "One-click optimization",
        text: "Perform complex SEO audits and optimizations with a single click.",
        icon: cursorImg,
    },
    {
        id: "keyword-generator",
        heading: "Smart Keyword Generator",
        text: "Automatic suggestions and the best keywords to target.",
        icon: sparkleImg,
    },
    {
        id: "alerts",
        heading: "Automated alerts",
        text: "Automatic notifications about your SEO health, including quick fixes.",
        icon: bellImg,
    },
    {
        id: "competitor-reports",
        heading: "Competitor reports",
        text: "Provides insights into competitors’ keyword strategies and rankings.",
        icon: filesImg,
    },
]