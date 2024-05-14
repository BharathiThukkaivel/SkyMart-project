import React from 'react';
import './Landing.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="hero-primary">Healthy and Fresh Food For You</h1>
          <p className="hero-description">If you want to enjoy your life with a healthy mind and healthy body, you are most welcome to our website.</p>
          <a href="#" className="btn btn--full margin-right-sm"><Link to='/tag/All'>Explore</Link></a>
          <a href="#" className="btn btn--outline"><Link to='/aboutus'>Learn More</Link></a>
        </div>
        <div className="hero-image-box">
          <img src="https://img.freepik.com/premium-photo/woman-shopping-grocery-store-with-phone-shopping-cart_662214-510941.jpg?w=740" alt="Girl designing UI for Website" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Landing;
