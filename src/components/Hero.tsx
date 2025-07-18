import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-12 col-md-6">
            <h1 className="hero-title">Beautiful Custom Cards</h1>
            <p className="hero-subtitle">
              Premium quality, personalized greeting cards delivered to your doorstep.
              Perfect for birthdays, weddings, holidays, and more.
            </p>
            <div className="d-flex">
              <Link to="/shop" className="btn btn-white mr-3">Shop Now</Link>
              <Link to="/custom" className="btn btn-outline">Create Custom</Link>
            </div>
          </div>
          <div className="col col-12 col-md-6 d-none d-md-block">
            <div className="hero-img">
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Elegant greeting cards showcase" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;