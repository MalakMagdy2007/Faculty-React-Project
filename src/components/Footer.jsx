import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        
        <div className="footer-col">
          <h3>Benha National University</h3>
          <p>Faculty of Computer Science</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faculty">Departments</Link></li>
            <li><Link to="/services">Programs</Link></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><span>Email:</span> info@bnu.edu.eg</p>
          <p><span>Location:</span> El Obour City, Al Qalyubia Governorate</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Benha National University. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;