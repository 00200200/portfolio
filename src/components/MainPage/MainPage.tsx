import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
  const handleContactClick = () => {
  };

  const handleArrowClick = () => {
  };

  return (
    <div className="main-page">
      <div className="content">
        <h1>Hey, I am Michal</h1>
        <h2>Full Stack Developer</h2>
        <button className="contact-button" onClick={handleContactClick}>
          Contact
        </button>
      </div>
      <div className="scroll-down-arrow" onClick={handleArrowClick}>
        <span className="arrow">&#8595;</span>
      </div>
    </div>
  );
};

export default MainPage;
