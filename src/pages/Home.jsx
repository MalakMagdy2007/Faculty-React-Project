
import React from 'react';
import { useTranslation } from "react-i18next";
import './Home.css';
import Statistics from '../components/Statistics';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
       <h1>
  Welcome to Faculty of <br />
  <span className="oswald-title">COMPUTER SCIENCE</span>
</h1>
<p>Empowering the Next Generation of Tech & AI Leaders</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Programs</button>
            <button className="btn-secondary">About Faculty</button>
          </div>
        </div>
      </div>
        <Statistics />
        <NewsCard />
        <Footer />
    </div>
    
  );

}

export default Home;