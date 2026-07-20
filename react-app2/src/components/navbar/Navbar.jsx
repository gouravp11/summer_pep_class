import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = ["Dashboard", "About"];

const getPath = (link) =>
  link === "Dashboard" ? "/" : "/" + link.toLowerCase();

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="navbar-logo-mark">◈</span> LearnHub
        </div>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={getPath(link)}
                className={`navbar-link ${activeLink === link ? "active" : ""}`}
                onClick={() => {
                  setActiveLink(link);
                  setMenuOpen(false);
                }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <input
            type="text"
            className="navbar-search"
            placeholder="Search..."
          />
          <Link to="/signup" className="navbar-cta">Sign up</Link>
          <div className="navbar-avatar">JS</div>
        </div>

        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}