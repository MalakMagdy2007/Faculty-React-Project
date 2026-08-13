import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Statistics from '../components/Statistics';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

function Home() {
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
                        <Link to="/programs" className="btn-primary">
                            Explore Programs
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            About Faculty
                        </Link>
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