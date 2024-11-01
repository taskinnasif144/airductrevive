import { Subtitles } from "lucide-react";

export const navLinks = [
    "Home", "Section", "About us", "Courses"
]

export interface priceCardsType {
    title: string;
    price: string;
    subTitles: string[];
}

export const priceCards = [
    {
        title: "Up to 1,000 SQ FT",
        price: "$199",
        subTitles: ["Unlimited Vents", "1 system", "1 zone", "2 main ducts", "1 return"]
    },
    {
        title: "From 1,000 to 2,000 SQ FT",
        price: "$299",
        subTitles: ["Unlimited Vents", "1 system", "1 zone", "2 main ducts", "1 return"]
    },
    {
        title: "More than 2,000 SQ FT",
        price: "$399",
        subTitles: ["Unlimited Vents", "1 system", "1 zone", "2 main ducts", "2 return"]
    },
];

export interface ourServiceTypes {
    title: string,
    subTitle: string
}

export const ourServicesData = [
    {
        title: "Dryer Vent Cleaning",
        subTitle: "Our professional and certified team will clean your dryer vent and make sure your vent is in a good condition, we will also make sure to check the airflow outside and will provide any recommendation if needed to keep you safe and happy."
    },
    {
        title: "Air Duct Cleaning HVAC",
        subTitle: "Air Duct Revive will use the updated  tools and machine to clean your heating or cooling vent. Our team has many years of experience in New England area with new systems and older systems Ductwork Cleaning."
    },
    {
        title: "Dryer Vent Repair",
        subTitle: "We offer professional dryer vent repair services to ensure your dryer is working efficiently and safely. We can also replace your vent cover and screen installation  to improve  protection."
    },
];

import PlaylistAddCheckRoundedIcon from '@mui/icons-material/PlaylistAddCheckRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

export interface ourProcessTypes {
    count: string,
    logo: React.ElementType,
    title: string,
    subTitle: string,
}

export const ourProcessData = [
    {
        count: "1",
        logo: PlaylistAddCheckRoundedIcon,
        title: "Get Your Estimate",
        subTitle: "we will ask  you some questions about your project and your location, after we have all the information  we will provide final pricing online without any hidden fee or extra charge ."
    },
    {
        count: "2",
        logo: EventNoteRoundedIcon,
        title: "Schedule Online",
        subTitle: "You will get a link to our calendar and you scheduled the best day and time for you. if you need to change or cancel your schedule you can do it Online without any fee or concern"
    },
    {
        count: "3",
        logo: EmojiFoodBeverageRoundedIcon,
        title: "The Day Of the Job",
        subTitle: "our technician will arrive to your home on time and do a walkthrough with you in your home. The tech will explain you how long the cleaning will take and confirm the process and the price before he starts."
    },
    {
        count: "4",
        logo: FavoriteBorderRoundedIcon,
        title: "You All Set",
        subTitle: "We will do walkthrough with you and make sure we complete our cleaning and left your home the same as we arrive but even more clean with improvements in  the air quality . the tech will provide invoice to your email and you can pay with credit card or check."
    },
]

export interface frequentlyAskedQuestionsType {
    question: string,
    answer: string,
}

export const frequentlyAskedQuestionsData = [
    {
        question: "How often should I have my air ducts cleaned?",
        answer: "It's generally recommended to have your air ducts cleaned every 3 to 5 years, depending on factors like your home's environment, pets, and whether anyone in your household has allergies or respiratory issues. However, if you notice significant dust buildup or mold growth, consider scheduling a cleaning sooner."
    },
    {
        question: "What are the benefits of regular air duct cleaning?",
        answer: "Regular air duct cleaning helps improve indoor air quality, reduces allergens, enhances HVAC efficiency, and can prolong the lifespan of your heating and cooling systems. Clean ducts also help maintain a healthier environment for your family."
    },
    {
        question: "Can air duct cleaning reduce my energy bills?",
        answer: "Yes, clean air ducts allow your HVAC system to operate more efficiently, which can lead to reduced energy consumption and lower utility bills. Dust and debris buildup can hinder airflow, forcing your system to work harder."
    },
    {
        question: "What methods do you use for air duct cleaning?",
        answer: "We use a combination of vacuum systems, brushes, and high-pressure air tools to thoroughly clean your air ducts. Our methods are safe for your home and effective in removing dust, debris, and allergens from your ventilation system."
    },
    {
        question: "Is air duct cleaning safe for my home?",
        answer: "Absolutely! Our cleaning methods are safe and effective. We use non-toxic materials and equipment designed to minimize disruption to your home. Our trained technicians follow strict safety protocols to ensure your home remains clean and secure."
    },
]

export interface testimonialsType {
    reviews: string,
    name: string,
    position: string,
    image: string
}

export const testimonialData = [
    {
        reviews: "Air Duct Revive exceeded our expectations with their professional and efficient air duct cleaning service. Their friendly and knowledgeable staff explained the process clearly, and the technicians were meticulous in their work. We were impressed by their attention to detail, as they even showed us before-and-after pictures of the ductwork. Since the cleaning, we've noticed a significant improvement in our home's air quality.",
        name: "Sara Hobert",
        position: "CEO, NoonBrew",
        image: "/dp-1.png"
    },
    {
        reviews: "Air Duct Revive exceeded our expectations with their professional and efficient air duct cleaning service. Their friendly and knowledgeable staff explained the process clearly, and the technicians were meticulous in their work. We were impressed by their attention to detail, as they even showed us before-and-after pictures of the ductwork. Since the cleaning, we've noticed a significant improvement in our home's air quality.",
        name: "Mia Hobert",
        position: "CEO, NoonBrew",
        image: "/dp-1.png"
    },
    {
        reviews: "Air Duct Revive exceeded our expectations with their professional and efficient air duct cleaning service. Their friendly and knowledgeable staff explained the process clearly, and the technicians were meticulous in their work. We were impressed by their attention to detail, as they even showed us before-and-after pictures of the ductwork. Since the cleaning, we've noticed a significant improvement in our home's air quality.",
        name: "Adguard Hobert",
        position: "CEO, NoonBrew",
        image: "/dp-1.png"
    },
];


export const contactUsData = {
    location: "3064-65 Silver Business Point, \n uttran - Mota Varaccha \n Surat",
    contact: "(+91)78785 35701 \n info@iathiyasolution.com"
}