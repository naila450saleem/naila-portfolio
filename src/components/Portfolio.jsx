// Portfolio.jsx
import { Link } from "react-router-dom";
import React from 'react';
import CustomeText from './ui/CustomeText';
import OrangeButton from './ui/OrangeButton';
import GenericSlider from './ui/GenericSlider';
import ArrowButton from './ui/ArrowButton';
import ClientOnly from './ui/ClientOnly';

import './styles/Portfolio.css'; // 👈 Make sure this CSS file exists

// ✅ Import images from assets
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website.png";
import website4 from "../assets/land1.png";
import website5 from "../assets/land.png";
import website6 from "../assets/online.png";
import website7 from "../assets/u-r.png";
import website8 from"../assets/motion.png";
import website9 from"../assets/pixels-web.png";


const buttons = ['All', 'Web Design', 'App Design', 'Branding'];
const portfolioData = [
  {
    title: "Admin-Dashboard",
    image: website1,
    href: "#",
    desc: "A modern e-commerce platform for online shopping.",
  },
  {
    title: "E-Commerce Website",
    image: website3,
    href: " https://naila450saleem.github.io/Ecommerce-website/",
    desc: "A food delivery app to order meals from nearby restaurants.",
  },
  {
    title: "Food Website",
    image: website2,
    href: "#",
    desc: "Personal website to showcase work and skills.",
  },
    {
    title: "Landing-Page 1",
    image: website4,
    href: "https://naila450saleem.github.io/electric-web/",
    desc: "Design using Html,CSS, js.",
  },
  {
  title: " Landing-Page 2",
  image: website5,
  href: "https://multivertcalls.com/",
  desc: "Design using Html,CSS, js. "
},
{
  title: "Online Nikkah",
  image: website6,
  href: "https://onlinenikkah-client.vercel.app",
  desc: "This website develop using React + Js.",
},
{
  title: " University-Result",
  image: website7,
  href: "https://naila450saleem.github.io/university-result/",
  desc: "Develop using React + Js.",
},
{
  title: " Motion-website",
  image: website8,
  href: "https://naila450saleem.github.io/motion-web/",
  desc: "Motion-website designed in Html, CSS, js with modern visuals.",
},
{
  title: " Pixels-web",
  image: website9,
  href: "https://casnofbet.co.uk/testsite/",
  desc: "Pixels app concept designed in React+PHp with modern visuals.",
},
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-20"> 
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-title-group">
            <CustomeText title="Lets Have a look at" className="portfolio-heading-main" />
            <div className="portfolio-subtitle-group">
              <CustomeText title="my" className="portfolio-heading-main" />
              <CustomeText title="Portfolio" className="portfolio-highlight" />
            </div>
          </div>

          <div className="see-all-button">
            <Link to="/portfolio">
              <OrangeButton title="See All" className="text-sm" />
            </Link>
          </div>
        </div>

        <div className="portfolio-content">
          <GenericSlider
            data={portfolioData}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />

          <div className="portfolio-buttons">
            <ClientOnly>
              {buttons.map((text, index) => (
                <button key={index} className="portfolio-btn">
                  {text}
                </button>
              ))}
            </ClientOnly>
          </div>

          <div className="portfolio-description">
            <div className="portfolio-description-header">
              <CustomeText
                title="Novana - E-commerce Website"
                className="portfolio-project-title"
              />
              <div className="portfolio-arrow">
                <ArrowButton className="arrow-icon" />
              </div>
            </div>
            <p className="portfolio-paragraph">
              Novana is a responsive e-commerce website built with ReactJS. It allows users to browse products, add to cart, and securely checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
