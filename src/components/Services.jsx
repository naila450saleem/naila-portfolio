import React from "react";
import CustomeText from "./ui/CustomeText";
import GenericSlider from "./ui/GenericSlider";
import { cardData } from "../data/data";
import "./styles/Services.css";

const Services = () => {
  return (
    <div className="services-container">
      {/* Optional overlay */}
      <div className="services-overlay"></div>

      {/* Section Header */}
      <div className="services-header">
        <div className="services-title">
          <CustomeText title="My" className="text-white" />
          <CustomeText title="Services" className="text-orange" />
        </div>
        <p className="services-desc">
          I have worked on multiple web projects using HTML, CSS, JavaScript, ReactJS and PHP Laravel.
Clean design, Responsive, and smooth user experience.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-wrapper">
        <GenericSlider
          data={cardData}
          slidesPerView={3}
          heightClass="h-[500px] sm:h-[550px]"
          cardType="hover"
        />
      </div>
    </div>
  );
};

export default Services;
