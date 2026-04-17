import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';
import './Navbar.css';

// Logo pic ekhane import korun
import logoPic from '../assets/assets/logo.png'; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-wrapper">
      <div className="nav-container">
        
        {/* Left side: Logo Link with Image */}
        <Link to="/" className="nav-logo">
          <img src={logoPic} alt="KeenKeeper Logo" className="logo-img" />
        </Link>

        {/* Right side: Navigation Links */}
        <div className="nav-links">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Home size={20} strokeWidth={2} />
            <span>Home</span>
          </Link>
          <Link to="/timeline" className={`nav-item ${location.pathname === '/timeline' ? 'active' : ''}`}>
            <Clock size={20} strokeWidth={2} />
            <span>Timeline</span>
          </Link>
          <Link to="/stats" className={`nav-item ${location.pathname === '/stats' ? 'active' : ''}`}>
            <BarChart3 size={20} strokeWidth={2} />
            <span>Stats</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;