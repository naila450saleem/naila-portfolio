import React from "react";
import ArrowButton from "./ArrowButton";
import "./PortfolioCard.css";

const PortfolioCard = ({ image, title, href, github, desc, priority = false }) => {
  return (
    <div className="portfolio-card">
      {/* Gradient Overlay */}
      <div className="portfolio-overlay" />

      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="portfolio-image"
        loading={priority ? "eager" : "lazy"}
      />

      {/* Content */}
      <div className="portfolio-content">
        {/* Top-right Live Demo Button */}
        <div className="portfolio-button-wrapper">
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer">
              <div className="portfolio-button">
                <ArrowButton className="arrow-icon" />
              </div>
            </a>
          )}
        </div>

        {/* Title */}
        <div className="portfolio-title-wrapper">
          <h3 className="portfolio-card-title">{title}</h3>
        </div>

        {/* Hover Description */}
        <div className="portfolio-desc">
          <h1 className="portfolio-desc-title">{title}</h1>
          <p className="portfolio-desc-text">{desc}</p>

          {/* Links Section */}
          <div className="portfolio-links">
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn-link live"
              >
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn-link github"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
