import React from "react";
import "./Footer.css";

const columns = [
  {
    title: "Shop",
    links: ["New arrivals", "Best sellers", "Gift cards", "Sale"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Support",
    links: ["Help center", "Shipping & returns", "Order tracking", "Contact us"],
  },
];

const socialLinks = [
  { label: "Instagram", icon: "◐" },
  { label: "X", icon: "✕" },
  { label: "Facebook", icon: "◑" },
  { label: "YouTube", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark">◈</span> Northline
            </div>
            <p className="footer-tagline">
              Thoughtfully made goods for everyday life.
            </p>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="footer-social-icon"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-columns">
            {columns.map((col) => (
              <div className="footer-column" key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-newsletter">
            <h4>Stay in the loop</h4>
            <p>Get product updates and offers in your inbox.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Northline. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}