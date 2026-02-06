import Client1 from "../assets/reviews/1.png"
import Client2 from "../assets/reviews/2.png"
import Client3 from "../assets/reviews/3.png"
import Client4 from "../assets/reviews/4.png"

export type Review = {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    text: string;
}

export const reviews: Review[] = [
    {
        id: "r1",
        name: "Metis Olympia",
        role: "Digital Marketing Director",
        company: "Quantum",
        avatar: Client1,
        text: "This product has completely changed how I manage my projects and deadlines.",
  },
  {
        id: "r2",
        name: "Aria Johnson",
        role: "Product Manager",
        company: "PULSE",
        avatar: Client2,
        text: "The AI-driven tools helped streamline our workflows, saving hours every week.",
  },
  {
        id: "r3",
        name: "Leo Martinez",
        role: "UX Designer",
        company: "Celestial",
        avatar: Client3,
        text: "Intuitive, fast, and extremely reliable. I recommend it to every designer I know.",
  },
  {
        id: "r4",
        name: "Lee Osborne",
        role: "CTO",
        company: "Apex",
        avatar: Client4,
        text: "Our team productivity skyrocketed after integrating this into our daily operations.",
  },
];


