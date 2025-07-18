import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">TerryPrints</Link>
        
        <button className="navbar-toggler" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
          ☰
        </button>
        
        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-link">Shop</Link>
          </li>
          <li className="nav-item">
            <Link to="/custom" className="nav-link">Custom Cards</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <i className="fas fa-shopping-cart"></i> Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;