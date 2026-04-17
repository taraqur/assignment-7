import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-wrapper">
      <div className="nav-container">
        {/* Left side: Logo */}
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="logo-bold">Keen</span>Keeper
        </Link>

        {/* Right side: Navigation Links */}
        <div className="nav-links">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Home size={20} strokeWidth={location.pathname === '/' ? 2.5 : 2} />
            <span>Home</span>
          </Link>
          <Link to="/timeline" className={`nav-item ${location.pathname === '/timeline' ? 'active' : ''}`}>
            <Clock size={20} strokeWidth={location.pathname === '/timeline' ? 2.5 : 2} />
            <span>Timeline</span>
          </Link>
          <Link to="/stats" className="nav-item">
            <BarChart3 size={20} strokeWidth={2} />
            <span>Stats</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;