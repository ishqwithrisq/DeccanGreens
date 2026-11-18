import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">

      {/* BRAND LOGO */}
      <Link to="/" className="site-brand" onClick={closeMenu}>
        <img className="site-logo" src="Logo.jpeg" alt="Deccan Greens" />
      </Link>

      {/* MOBILE MENU ICON */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* NAVIGATION LINKS */}
      <nav className={`site-nav ${menuOpen ? "menu-open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/solutions" onClick={closeMenu}>
          Solutions
        </NavLink>

        <NavLink to="/asd" onClick={closeMenu}>
          Academy & Store
        </NavLink>

        <NavLink to="/projectKnowledgehub" onClick={closeMenu}>
          Project/Knowledge
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>

      {/* HEADER CTA */}
      <Link to="/#contact" className="site-header-btn" onClick={closeMenu}>
        Get in Touch
      </Link>

    </header>
  );
}