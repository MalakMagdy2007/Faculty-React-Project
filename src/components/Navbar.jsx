import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import myNewLogo from '../assets/bnu-logo.png';

function Navbar() {
  return (
    <div className="navbar-wrapper">
      
      <div className="top-mini-bar">
        <span>BNU</span>
      </div>

    
      <header className="main-navbar">
        <div className="nav-container">
          
          
          <Link to="/" className="nav-brand">
            <img src={myNewLogo} alt="BNU Logo" className="logo-img"></img>
            <div className="brand-text">
              <h1>Benha National University</h1>
              <span>Faculty of Computer Science</span>
            </div>
          </Link>
          
          <ul className="nav-menu">
            <li><Link className="nav-item" to="/">Home</Link></li>
            <li><Link className="nav-item" to="/about">About</Link></li>
            <li><Link className="nav-item" to="/departments">Departments</Link></li>
            <li><Link className="nav-item" to="/programs">Programs</Link></li>
            <li><Link className="nav-item" to="/news">News</Link></li>
            <li><Link className="nav-item" to="/announcements">Announcements</Link></li>
            <li><Link className="nav-item" to="/faculty">Faculty</Link></li>
            <li><Link className="nav-item" to="/services">Services</Link></li>
            <li><Link className="nav-item" to="/events">Events</Link></li>
          </ul>

          
          <div>
            <Link to="/contact" className="contact-btn">Contact Us</Link>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Navbar;