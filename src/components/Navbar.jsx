import React from 'react';
import './Navbar.css';
import bnuLogo from '../assets/bnu-logo.png';

const Navbar = () => {
  return (
    <header className="navbar-wrapper">

  <div className="top-mini-bar">
        <span>BNU</span>
      </div>

      <nav className="main-navbar">
        <div className="nav-container">
          {/* Logo */}
          <a href="/" className="nav-brand">
            <img src={bnuLogo} alt="Benha National University Logo" className="navbar-logo" />
            <div className="brand-text">
              <h1>Benha National University</h1>
              <span>Faculty of Computer science</span>
            </div>
          </a>

          {/* Nav Links */}
          <ul className="nav-menu">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/departments">Departments</a></li>
            <li className="nav-item"><a href="/programs">Programs</a></li>
            <li className="nav-item"><a href="/news">News</a></li>
            <li className="nav-item"><a href="/announcements">Announcements</a></li>
            <li className="nav-item"><a href="/faculty">Faculty</a></li>
            <li className="nav-item"><a href="/services">Services</a></li>
            <li className="nav-item"><a href="/events">Events</a></li>
           
            <li className="nav-item">
              <a href="/contact" className="contact-btn">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;