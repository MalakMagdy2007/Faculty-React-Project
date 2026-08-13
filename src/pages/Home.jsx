
import React from 'react';
import { useTranslation } from "react-i18next";
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
       <h1 className="hero-title">Welcome to Faculty of Computer Science</h1>
<p>Empowering the Next Generation of Tech & AI Leaders</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Programs</button>
            <button className="btn-secondary">About Faculty</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;