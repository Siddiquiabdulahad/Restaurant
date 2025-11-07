import React from 'react';
import '../styles/components.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/videos/istockphoto-1485829293-640_adpp_is.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <div className="hero-subtitle">
              <span>Welcome to Flavio</span>
            </div>
            <h1>EXQUISITE DINING EXPERIENCE</h1>
            <p>Where tradition meets innovation in every dish</p>
            <div className="hero-buttons">
              <a href="#menu" className="btn">DISCOVER MENU</a>
              <a href="#contact" className="btn btn-outline">BOOK TABLE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;