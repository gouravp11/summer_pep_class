import React from "react";
import "./About.css";

const stats = [
  { value: "10K+", label: "Students" },
  { value: "50+", label: "Courses" },
  { value: "20+", label: "Instructors" },
  { value: "4.8★", label: "Average Rating" },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <span className="about-eyebrow">About Us</span>
        <h1>Learn new skills, anytime, anywhere.</h1>
        <p>
          We provide high-quality online courses to help students and
          professionals learn new skills and achieve their career goals.
        </p>
      </section>

      <section className="about-stats">
        {stats.map((item) => (
          <div className="about-stat" key={item.label}>
            <div className="about-stat-value">{item.value}</div>
            <div className="about-stat-label">{item.label}</div>
          </div>
        ))}
      </section>

      <section className="about-mission">
        <div className="about-mission-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make learning simple, affordable, and accessible
            for everyone. We offer practical courses created by experienced
            instructors to help you grow your knowledge and career.
          </p>
        </div>

        <div className="about-mission-visual">
          <div className="about-mission-card">
            <span className="about-mission-mark">🎓</span>
            <p>Learn. Practice. Succeed.</p>
          </div>
        </div>
      </section>
    </div>
  );
}