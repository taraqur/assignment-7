import React from 'react';
import './Footer.css';

// Folder structure onujayi assets import kora hocche
import instagramIcon from '../assets/assets/instagram.png';
import facebookIcon from '../assets/assets/facebook.png';
import twitterIcon from '../assets/assets/twitter.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <h1 className="footer-brand">KeenKeeper</h1>
        <p className="footer-desc">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="social-section">
          <h4>Social Links</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon-circle">
               <img src={instagramIcon} alt="Instagram" className="social-img" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-circle">
               <img src={facebookIcon} alt="Facebook" className="social-img" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon-circle">
               <img src={twitterIcon} alt="Twitter" className="social-img" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;