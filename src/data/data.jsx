// src/data/data.jsx
import { Star, Award, ShieldCheck } from 'lucide-react';

// Import all images from src/assets
import frame26 from "../assets/Frame 26.svg";
import frame60 from "../assets/Frame 60.svg";
import rect6 from "../assets/Rectangle 6.svg";
import rect6_1 from "../assets/Rectangle 6 (1).svg";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import cont from "../assets/cont.png";
import website from "../assets/website.png";
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import novana from "../assets/Novana.PNG";
import girl from "../assets/girl.png";
import frame68 from "../assets/Frame 68.svg";
import propDefault from "../assets/Property1Default.svg";
import propVariant from "../assets/Property1Variant2.svg";
import sms from "../assets/sms.svg";
// import ui1 from "../assets/ui1.png";
// import ui2 from "../assets/ui2.png";
// import ui3 from "../assets/ui3.png";
// import ui4 from "../assets/ui4.png";

// Experiences
export const experiences = [
  {
    company: "Freelance Projects",
    duration: "Jan 2022 – Dec 2023",
    role: "Web Developer",
    desc: "Built websites using React and PHP",
    dotColor: "orange",
  },
  {
    company: "Portfolio Project",
    duration: "Jun 2023",
    role: "React Developer",
    desc: "Created UI with React and Tailwind",
    dotColor: "teal",
  },
  {
    company: "Team Project",
    duration: "Aug 2023 – Oct 2023",
    role: "UI Designer",
    desc: "Built movie listing app using React",
    dotColor: "bg-[#FD853A]",
  },
];

// Portfolio buttons
export const buttons = [
  "Landing Page",
  "Product Design",
  "Animation",
  "Glassmorphism",
  "Cards",
];

// Stats with icons
export const iconAndText = [
  { icon: Star, name: "4.9 Average Rating" },
  { icon: Award, name: "25+ Winning Awards" },
  { icon: ShieldCheck, name: "Certified Product Design" },
];

// Skills
export const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Express",
];

// Portfolio gallery
export const portfolioData = [
  { image: frame26, title: "Lirante 1", href: "/project-1", desc: "Lorem ipsum dolor sit amet..." },
  { image: frame26, title: "Lirante 2", href: "/project-2", desc: "Lorem ipsum dolor sit amet..." },
  { image: frame26, title: "Lirante 3", href: "/project-3", desc: "Lorem ipsum dolor sit amet..." },
  { image: frame26, title: "Lirante 4", href: "/project-4", desc: "Lorem ipsum dolor sit amet..." },
];

// Testimonials
export const reviews = [
  { name: "Mahesh Pokale", role: "Web Designer", rating: 5, text: "Consectetur adipiscing elit. Sed congue interdum ligula..." },
  { name: "Sarah Johnson", role: "Product Manager", rating: 4, text: "Excellent work! Very professional and meets deadlines..." },
  { name: "John Doe", role: "UI/UX Lead", rating: 5, text: "Top quality design and coding. Strong attention to detail..." },
  { name: "Aryan Sharma", role: "Software Engineer", rating: 4, text: "Innovative approach, clean design, and prompt delivery..." },
];

// Services / Expertise
export const cardData = [
  { title: "Ecommerce Design", imageSrc: img2 },
  { title: "Movie Website", imageSrc: img1 },
  { title: "Dashboard", imageSrc: img3 },
  { title: "Cloth Website", imageSrc: img4 },
  { title: "Contact Page", imageSrc: cont },
  //  { title: "UI Design 1", imageSrc: ui1 },
  // { title: "UI Design 2", imageSrc: ui2 },
  // { title: "UI Design 3", imageSrc: ui3 },
  // { title: "UI Design 4", imageSrc: ui4 },
];

// HireMe images
export const hireMeImages = {
  girlImg: girl,
  variantImg: propVariant,
};

// Hero illustration
export const heroImages = {
  frame68,
  propDefault,
  sms,
};
