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
                src="https://images.pexels.com/photos/6709925/pexels-photo-6709925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
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