import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-3">
            <h3 className="footer-title">TerryPrints</h3>
            <p className="footer-text">
              Premium quality, personalized greeting cards for every occasion. 
              We help you celebrate life's special moments with beautiful, custom-designed cards.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f">f</i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter">t</i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram">i</i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-pinterest-p">p</i>
              </a>
            </div>
          </div>
          
          <div className="col col-12 col-sm-6 col-md-3">
            <h4 className="footer-heading">Quick Links</h4>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/shop" className="footer-link">Shop</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/faq" className="footer-link">FAQ</Link>
          </div>
          
          <div className="col col-12 col-sm-6 col-md-3">
            <h4 className="footer-heading">Categories</h4>
            <Link to="/category/birthday-cards" className="footer-link">Birthday Cards</Link>
            <Link to="/category/wedding-cards" className="footer-link">Wedding Cards</Link>
            <Link to="/category/holiday-cards" className="footer-link">Holiday Cards</Link>
            <Link to="/category/custom-cards" className="footer-link">Custom Cards</Link>
            <Link to="/category/thank-you-cards" className="footer-link">Thank You Cards</Link>
          </div>
          
          <div className="col col-12 col-sm-6 col-md-3">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">123 Print Street, Card City, CP 12345</span>
            </div>
            <div className="footer-contact">
              <span className="footer-contact-icon">📞</span>
              <span className="footer-contact-text">+1 (555) 123-4567</span>
            </div>
            <div className="footer-contact">
              <span className="footer-contact-icon">✉️</span>
              <span className="footer-contact-text">info@terryprints.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} TerryPrints. All rights reserved.
          </p>
          <div>
            <Link to="/privacy-policy" className="footer-link" style={{ marginRight: '1rem' }}>
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="footer-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;