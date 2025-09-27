// Footer.jsx (Tailwind CSS removed, plain CSS classNames added)
import React from "react";
import { FacebookIcon, YoutubeIcon, InstagramIcon, TwitterIcon, MessageCircle, Github, ArrowUpRight } from "lucide-react";

import CustomeText from "./ui/CustomeText";
import { Link } from "react-router-dom";
import ClientOnly from "./ui/ClientOnly";
import "./styles/Footer.css";



const Footer = () => {
  const navigation = ["Home", "About", "Service", "Resume", "Project", "Contact"];
  const iconsAndUrl = [
    { icon: FacebookIcon, url: "https://facebook.com/naila_saleem450" },
    { icon: MessageCircle, url: "https://wa.me/923476354569" },
    { icon: InstagramIcon, url: "https://instagram.com/nailasaleem" },
    { icon: Github, url: "https://github.com/naila450saleem" },
      { icon: "fiverr", url: "https://www.fiverr.com/nailasaleem450" },
  ];

  const contact = ["+92 3476354569", "nailasaleem450gmail.com" ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 className="footer-heading">Let's Connect There</h1>
        <ClientOnly>
  <a
    href="https://www.fiverr.com/nailasaleem450"
    target="_blank"
    rel="noopener noreferrer"
    className="hire-me flex items-center gap-2"
  >
    Hire Me
    <ArrowUpRight size={20} className="arrow-icon" />
  </a>
</ClientOnly>

      </div>

      <div className="divider" />

      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-brand">
            <div className="logo-circle">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <text x="4" y="18" fontSize="12" fontWeight="bold" fill="white">NS</text>
              </svg>
            </div>
            <span className="brand-text">Naila</span>
          </div>
          <p className="footer-desc">
            Naila Saleem – Transforming ideas into responsive and user-friendly websites.....
          </p>
          <div className="footer-icons">
  {iconsAndUrl.map((item, idx) => {
    // Fiverr ka case handle karo
    if (item.icon === "fiverr") {
      return (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ fontSize: "11px" }}
        >
          Fiverr
        </a>
      );
    }

    // Normal icons (Facebook, Instagram, GitHub, etc.)
    const Icon = item.icon;
    return (
      <a
        key={idx}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <Icon size={14} />
      </a>
    );
  })}
</div>

        </div>

        <div className="footer-column">
          <CustomeText title="Navigation" className="column-title" />
          <div className="column-links">
            {navigation.map((key, idx) => (
              <a href={`#${key.toLowerCase()}`} key={idx} className="link">
                {key}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <CustomeText title="Contact" className="column-title" />
          <div className="column-links">
            {contact.map((key, idx) => (
              <span key={idx} className="link">{key}</span>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <CustomeText title="Get the latest information" className="column-title" />
          <div className="newsletter">
            <ClientOnly>
              <input type="text" placeholder="Email Address" className="newsletter-input" />
              <button className="newsletter-btn">
                <svg width="20" height="21" viewBox="0 0 24 25" fill="none">
                  <path d="M6.29 3.49C3.91 2.39 1.36 4.67 2.19 7.16L3.45 10.9C3.59 11.31 3.97 11.58 4.4 11.58H13C13.55 11.58 14 12.03 14 12.58C14 13.13 13.55 13.58 13 13.58H4.4C3.97 13.58 3.59 13.86 3.45 14.26L2.19 18C1.36 20.5 3.91 22.78 6.29 21.67L20.1 15.3C22.42 14.23 22.42 10.93 20.1 9.86L6.29 3.49Z" fill="#FCFCFD" />
                </svg>
              </button>
            </ClientOnly>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="footer-bottom">
        <p className="copyright">Copyright© 2025 Naila. All Rights Reserved.</p>
        <a href="#" className="privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
