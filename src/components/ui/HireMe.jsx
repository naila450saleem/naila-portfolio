import React from "react";
import CustomeText from "./CustomeText";
import ClientOnly from "./ClientOnly";
import "./HireMe.css"; // Make sure the path is correct
import girlImg from "../../assets/girl.png";
import variantImg from "../../assets/Property1Variant2.svg";

const HireMe = () => {
  return (
    <div className="hire-me-container">
      {/* Left Image Box */}
     <div className="hire-me-image-box">
  <img src={girlImg} alt="Hire me" className="hire-me-image default" />
  <img src={variantImg} alt="Hire me hover" className="hire-me-image variant" />
</div>

      {/* Right Text Content */}
      <div className="hire-me-text">
        <div className="hire-me-heading">
          <CustomeText title="Why" className="text-[#344054]" />
          <CustomeText title="Hire me" className="text-[#FD853A]" />
          <CustomeText title="?" className="text-[#344054]" />
        </div>

        <p className="hire-me-description">
          Skilled in HTML, CSS, JavaScript, ReactJS, and PHP. I focus on building responsive, fast, and user-friendly websites with a strong emphasis on UI/UX design that delivers real value.

        </p>

        <div className="hire-me-stats">
          <div className="stat-box">
            <CustomeText title="15+" className="stat-number" />
            <CustomeText title="Project Completed" className="stat-label" />
          </div>
          <div className="stat-box">
    <CustomeText title="100%" className="stat-number" />
    <CustomeText title="Client Satisfaction" className="stat-label" />
  </div>
  <div className="stat-box">
    <CustomeText title="3+" className="stat-number" />
    <CustomeText title="Years Experience" className="stat-label" />
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

export default HireMe;
