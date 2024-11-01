

export const navLinks = [
    "Home", "Pricing", "Services", "Process", "Testimonials", "FAQ"
]

export interface priceCardsType {
    title: string;
    price: string;
    subTitles: string[];
}

export const priceCards = [
    {
        title: "Up to 1,500 SQ FT",
        price: "$199",
        subTitles: ["1 System Clean", "2 main ducts", "Free Plenum box inspection", "Free system inspection", "Free dryer inspection", "free intake line inspection"]
    },
    {
        title: "Up to 3,000 SQ FT",
        price: "$299",
        subTitles: ["1 System Clean", "2 main ducts", "Free Plenum box inspection", "Free system inspection", "Free dryer inspection", "Free intake line inspection"]
    },
    {
        title: "More than 3,000 SQ FT",
        price: "$399",
        subTitles: ["1 System Clean", "2 main ducts", "Free Plenum box inspection", "Free system inspection", "Free dryer inspection", "free intake line inspection"]
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
        reviews: "Air Duct Revive transformed our home's air quality! Their team was punctual, courteous, and highly skilled. The cleaning process was thorough and efficient. We're breathing easier and enjoying a healthier indoor environment. Highly recommended!",
        name: "Michael Johnson",
        position: "IT Consultant",
        image: "/dp-2.jpg"
    },
    {
        reviews: "I was initially skeptical about air duct cleaning, but Air Duct Revive changed my mind. Their technicians were knowledgeable and explained everything clearly. The cleaning process was quick and painless. We're so happy with the results!",
        name: "Emily Davis",
        position: "Stay-at-Home Mom",
        image: "/dp-3.png"
    },
    {
        reviews: "Air Duct Revive provided exceptional service from start to finish. Their team was professional, efficient, and friendly. The cleaning process was thorough, and we're thrilled with the improved air quality in our home. We'll definitely use their services again!",
        name: "David Lee",
        position: "Small Business Owner",
        image: "/dp-1.jpg"
    },
];


export const contactUsData = {
    location: "3064-65 Silver Business Point, \n uttran - Mota Varaccha \n Surat",
    contact: "(+91)78785 35701 \n info@iathiyasolution.com"
}