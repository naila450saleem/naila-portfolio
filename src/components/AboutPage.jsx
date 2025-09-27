import React from "react";
import CustomeText from "../components/ui/CustomeText";
import ClientOnly from "../components/ui/ClientOnly";
// import "../components/ui/HireMe"; 
import "../components/styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-heading">
          <h1>About <span className="highlight">Me</span></h1>
        </div>

        <p className="about-description">
          Hello! I'm <strong>Naila</strong>, a passionate web developer and UI/UX designer focused on building responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, ReactJS, and Figma — I love bringing creative ideas to life through clean code and intuitive design.
        </p>

        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        <ClientOnly>
          <a
            href="https://www.fiverr.com/nailasaleem450"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hire-me-button">Hire me</button>
          </a>
        </ClientOnly>
      </div>
    </div>
  );
};

export default AboutPage;
