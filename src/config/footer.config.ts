import type { FooterGroup  } from "../types/footer";

export const footerGroups:FooterGroup[] = [
    {
        id: "primary",
        sections: [
            {
                title: "Product",
                items: [
                    {label: "Features", href: "#features"},
                    {label: "Partners", href: "#partners"},
                    {label: "Reviews", href: "#reviews"},
                    {label: "Pricing", href: "#pricing"}
                ],
            },
            {
                title: "Company",
                items: ["About", "Blog", "Careers", "Manifesto", "Press", "Contract"]
            }
        ]
    },
    {
        id: "secondary",
        sections: [
            {
                title: "Resources",
                items: ["Examples", "Community", "Guides", "Docs"]
            },
            {
                title: "Legal",
                items: ["Privacy", "Terms", "Security" ]
            }
        ]
    }
]