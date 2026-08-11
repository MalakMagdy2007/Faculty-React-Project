import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Benha National University</h3>
          <p>Faculty of Computer Science</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/programs">Programs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@bnu.edu.eg</p>
          <p>Location: El Obour City, Al Qalyubia Governorate</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Benha National University. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;