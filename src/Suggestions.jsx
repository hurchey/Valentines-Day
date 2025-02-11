import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerImage from './assets/Happy.png'; // Import the header image
import './App.css';

function Suggestions() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="full-screen-container">
      <img src={headerImage} alt="Header" className="header-image" />
      
      <h1>Valentine's Day Suggestions</h1>
      <ul>
        <li>Dinner with oysters</li>
        <li>Romantic movie night</li>
        <li>Fun date at Natick Mall</li>
      </ul>
      <button onClick={handleBackClick} className="back-button">
        Back to Home
      </button>
    </div>
  );
}

export default Suggestions;
