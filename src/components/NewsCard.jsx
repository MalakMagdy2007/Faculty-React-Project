import React from 'react';
import './NewsCard.css';

import newsImg1 from '../assets/students.jpg';
import newsImg2 from '../assets/ai_workshop.jpg';
import newsImg3 from '../assets/graduation_project_guidelines.jpg';

function NewsCard() {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>Latest News & Announcements</h2>
      </div>
      
      <div className="news-container">
        
        <div className="news-card">
          <div className="news-img-box">
            <img src={newsImg1} alt="Start of Registration" />
          </div>
          <div className="news-content">
            <h3>Start of Registration</h3>
            <span className="news-date">August 10, 2026</span>
            <p>Registration for the new academic semester is now officially open for all computer science students.</p>
          </div>
        </div>

        <div className="news-card">
          <div className="news-img-box">
            <img src={newsImg2} alt="AI Workshop Announcement" />
          </div>
          <div className="news-content">
            <h3>AI Workshop Announcement</h3>
            <span className="news-date">August 15, 2026</span>
            <p>Join our upcoming hands-on artificial intelligence and machine learning workshop at the main lab.</p>
          </div>
        </div>

        <div className="news-card">
          <div className="news-img-box">
            <img src={newsImg3} alt="Graduation Project Guidelines" />
          </div>
          <div className="news-content">
            <h3>Graduation Project Guidelines</h3>
            <span className="news-date">August 20, 2026</span>
            <p>Important updates regarding the submission deadlines and graduation project requirements have been posted.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsCard;