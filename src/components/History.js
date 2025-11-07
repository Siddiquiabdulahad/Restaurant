import React from 'react';
import '../styles/components.css';

const History = () => {
  return (
    <section className="history">
      <div className="history-overlay"></div>
      <div className="container">
        <div className="history-content">
          <div className="history-badge">
            <span>Since 1995</span>
          </div>
          <h2>OUR HISTORY</h2>
          <div className="history-text">
            <div className="history-subtitle">
              <h3>HOW IT ALL STARTED</h3>
            </div>
            <p>
              OUR STORY GOES BACK OVER 25 YEARS AGO, WHEN CONSECTETUR ADIPISCING ELIT.
              VESTIBULUM AC COMMODO NISH, SED FINIBUS VELIT. MORBI MATTIS FAUCIBUS URNA, A
              IMPERDIET NISL INTERDUM NON. SED MATTIS NISL RHONGUS, RHONGUS ERAT SIT
              AMET, GRAVIDA MI. SED UT AUGUE NUMC. DUIS TINCIDUNT SEMPER SAGITTIS...
            </p>
          </div>
          <a href="#full-history" className="btn btn-outline">OUR FULL HISTORY</a>
        </div>
      </div>
    </section>
  );
};

export default History;