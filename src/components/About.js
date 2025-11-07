import React from 'react';
import '../styles/components.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-title">
              <h2>Our Story</h2>
            </div>
            <p>
              For over two decades, Flavio has been the epitome of culinary excellence. 
              Our journey began with a simple passion for authentic flavors and has evolved 
              into a symphony of taste that celebrates both tradition and innovation.
            </p>
            <p>
              Every dish tells a story, every ingredient has a purpose, and every meal 
              is crafted to create unforgettable memories.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Restaurant Interior</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;