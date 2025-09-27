import React from "react";
import DualToggleButtons from "./ui/DualButtons";
import { Star } from "lucide-react";
import "./styles/Hero.css";

// ✅ Import all images from src/assets
import girlImg from "../assets/girl.png";
import frame68 from "../assets/Frame 68.svg";

const Hero = () => {
  return (
    <div className="hero">
      {/* Left Quote Box */}
      <div className="quote-box">
        <div className="quote-mark">"</div>
        <p className="quote-text">
          As a passionate UI/UX, Figma & Web developer, I specialize in creating visually engaging, responsive, and user-friendly websites that help brands stand out."
          <br />
          Highly recommended.
        </p>
      </div>

      {/* Center Hero Content */}
      <div className="hero-center">
        <button className="hero-btn">Hello!</button>
        <div className="hero-heading">
          <span className="text-dark">I'm</span>
          <span className="text-orange">Naila Saleem</span>
          <span className="text-dark">,</span>
        </div>
        <div className="hero-subtitle">UI/UX & Web Developer</div>

        <div className="hero-illustration">
          <div className="hero-bg-circle"></div>

          <div className="hero-frame">
            <img src={frame68} alt="Frame" width="1017" height="688" />
          </div>

          <img
            src={girlImg}
            alt="naila"
            className="w-20 h-auto girl-image"
          />

          <div className="toggle-buttons">
            <DualToggleButtons />
          </div>
        </div>
      </div>

      {/* Right Experience Box */}
      <div className="experience-box">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
          ))}
        </div>
        <h1 className="experience-years">3+ Years</h1>
        <p className="experience-text">Experience</p>
      </div>
    </div>
  );
};

export default Hero;
