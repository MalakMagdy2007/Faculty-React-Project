import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import Statistics from '../components/Statistics';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

function Home() {
    const { i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>
                        {isAr ? "مرحباً بكم في كلية" : "Welcome to Faculty of"} <br />
                        <span className="oswald-title">
                            {isAr ? "الحاسبات والمعلومات" : "COMPUTER SCIENCE"}
                        </span>
                    </h1>
                    <p>
                        {isAr
                            ? "تمكين الجيل القادم من قادة التكنولوجيا والذكاء الاصطناعي"
                            : "Empowering the Next Generation of Tech & AI Leaders"
                        }
                    </p>

                    <div className="hero-buttons">
                        <Link to="/programs" className="btn-primary">
                            {isAr ? "استكشف البرامج" : "Explore Programs"}
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            {isAr ? "عن الكلية" : "About Faculty"}
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