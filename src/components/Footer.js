import React from 'react';
import '../styles/components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-info">
              <h3>FLAVIO RESTAURANT</h3>
              <p>123 Navi Mumbai<br />Maharashtra</p>
              <p>+91 7841000782<br />info@ahadrestaurant.com</p>
            </div>
            
            <div className="footer-hours">
              <h4>Opening Hours</h4>
              <p>Monday - Saturday</p>
              <p>17:00 - 23:00</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Flavio Restaurant. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;