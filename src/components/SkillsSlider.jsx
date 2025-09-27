import React from "react";
import "./styles/SkillsSlider.css";

const SkillsSlider = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "UI/UX",
    "Figma",
    "PHP",
  ];

  return (
    <div className="skills-slider-container">
      <div className="slider-strip">
        <div className="marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-item" key={index}>
              <svg
                width="34"
                height="34"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                  fill="#FD853A"
                />
              </svg>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
