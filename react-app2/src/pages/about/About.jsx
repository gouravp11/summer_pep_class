import React from "react";
import "./About.css";

const stats = [
  { value: "2018", label: "Founded" },
  { value: "48K+", label: "Customers served" },
  { value: "12", label: "Countries shipped to" },
  { value: "94%", label: "Repeat purchase rate" },
];

const values = [
  {
    title: "Make it last",
    text: "We design goods meant to be used for years, not seasons — built from materials that age well.",
  },
  {
    title: "Keep it honest",
    text: "Clear pricing, real photos, and no dark patterns. What you see is what you get.",
  },
  {
    title: "Move deliberately",
    text: "We'd rather ship one thing well than ten things fast. Quality sets the pace here.",
  },
];

const team = [
  { name: "Amara Osei", role: "Co-founder & CEO", initials: "AO" },
  { name: "Ben Lindqvist", role: "Co-founder & Design", initials: "BL" },
  { name: "Priya Nair", role: "Head of Operations", initials: "PN" },
  { name: "Marcus Webb", role: "Head of Product", initials: "MW" },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-eyebrow">Our story</span>
        <h1>Goods worth keeping, made by people who care.</h1>
        <p>
          Northline started in a garage with one product and a simple idea:
          make things well enough that no one has to replace them.
        </p>
      </section>

      <section className="about-stats">
        {stats.map((s) => (
          <div className="about-stat" key={s.label}>
            <div className="about-stat-value">{s.value}</div>
            <div className="about-stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="about-mission">
        <div className="about-mission-text">
          <h2>Why we do this</h2>
          <p>
            Most everyday products are built to be replaced. We think that's
            backwards. Every item we make starts with a simple question: will
            this still earn its place on your shelf in five years? If the
            answer isn't yes, we don't ship it.
          </p>
          <p>
            That mindset shapes everything — from the suppliers we choose to
            the way we test a product before it ever reaches your door.
          </p>
        </div>
        <div className="about-mission-visual" aria-hidden="true">
          <div className="about-mission-card">
            <span className="about-mission-mark">◈</span>
            <p>"Built to be used, not replaced."</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>What guides us</h2>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div className="about-value-card" key={v.title}>
              <span className="about-value-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-team">
        <h2>The people behind it</h2>
        <div className="about-team-grid">
          {team.map((member) => (
            <div className="about-team-card" key={member.name}>
              <div className="about-team-avatar">{member.initials}</div>
              <div className="about-team-name">{member.name}</div>
              <div className="about-team-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}