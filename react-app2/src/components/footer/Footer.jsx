import React from "react";
import "./Footer.css";

const columns = [
  {
    title: "Courses",
    links: ["Web Development", "Programming", "Data Science", "Design"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQs", "Terms", "Privacy Policy"],
  },
];

const socialLinks = [
  { label: "Instagram", icon: "📷" },
  { label: "LinkedIn", icon: "💼" },
  { label: "YouTube", icon: "▶" },
  { label: "X", icon: "✕" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-mark">🎓</span> LearnHub
            </div>

            <p className="footer-tagline">
              Learn new skills with expert-led online courses.
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
            <h4>Stay Updated</h4>
            <p>Subscribe to receive updates about new courses.</p>

            <form
              className="footer-newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>

          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}