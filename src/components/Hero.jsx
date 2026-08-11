import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Faculty of Computer Science</h1>
        <p className="hero-subtitle">Empowering the Next Generation of Tech & AI Leaders</p>
        <div className="hero-buttons">
          <a href="/programs" className="btn-blue">Explore Programs</a>
          <a href="/about" className="btn-outline">About Faculty</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

