
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/Logo.jpeg"
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaSeedling,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="site-footer" id="contact">

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-about">
          <Link to="/" className="footer-brand">
           

            <img
  src={logo}
  alt="Deccan Greens"
  className="footer-brand-logo"
/>
          </Link>

          <p>
            Integrated agricultural consultancy, practical
            training, quality growing materials and digital
            solutions for rural and urban agriculture.
          </p>

          {/* Social Media */}
          <div className="footer-socials">

            <a
              href="https://www.facebook.com/profile.php?id=61596185342428"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Deccan Greens Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/deccangreens/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Deccan Greens Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          <a
            href="/#capabilities"
            onClick={(e) => handleSectionClick(e, "capabilities")}
          >
            Solutions
          </a>

          <a
            href="/#courses"
            onClick={(e) => handleSectionClick(e, "courses")}
          >
            Academy & Store
          </a>

          <a
            href="/#insights"
            onClick={(e) => handleSectionClick(e, "insights")}
          >
            Projects & Knowledge Hub
          </a>

          <a
            href="/#contact"
            onClick={(e) => handleSectionClick(e, "contact")}
          >
            Contact
          </a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <a
            href="/#capabilities"
            onClick={(e) => handleSectionClick(e, "capabilities")}
          >
            Consultancy
          </a>

          <a
            href="/#courses"
            onClick={(e) => handleSectionClick(e, "courses")}
          >
            Training Programs
          </a>

          <a
            href="/#shop"
            onClick={(e) => handleSectionClick(e, "shop")}
          >
            Plants & Products
          </a>

          <a
            href="/#knowledge"
            onClick={(e) => handleSectionClick(e, "knowledge")}
          >
            E-Books & Digital Resources
          </a>

          <a
            href="/#capabilities"
            onClick={(e) => handleSectionClick(e, "capabilities")}
          >
            Garden Development
          </a>

          <a
            href="/#projects"
            onClick={(e) => handleSectionClick(e, "projects")}
          >
            Projects & Partnerships
          </a>
        </div>

        {/* Policies */}
        <div className="footer-column">
          <h3>Policies</h3>

          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/shipping-policy">Shipping & Delivery Policy</Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Near+Monika+Hotel+Nanekarwadi+Chakan+Pune+410501"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >
            <FiMapPin />
            <span>
              Near Monika Hotel, Nanekarwadi,
              Chakan, Khed, Pune, Maharashtra 410501.
            </span>
          </a>

          <a
            href="tel:+919166889163"
            className="footer-contact-item"
          >
            <FiPhone />
            <span>+91 91668 89163</span>
          </a>

          <a
            href="mailto:contact@deccangreen.com"
            className="footer-contact-item"
          >
            <FiMail />
            <span>contact@deccangreen.com</span>
          </a>

          <div className="footer-contact-item">
            <FiClock />
            <span>10 AM to 6 PM, Monday to Sunday.</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Deccan Green.
          All Rights Reserved.
        </span>

        <span>
          Designed with <b className="footer-heart">♥</b> by Deccan Green
        </span>

        <button
          className="footer-back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Back to top"
          title="Back to top"
        >
          <FiArrowUpRight />
        </button>

      </div>

    </footer>
  );
}
