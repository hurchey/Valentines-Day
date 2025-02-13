// src/Suggestions.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerImage from './assets/Happy.png';
import PhotoSlideshow from './PhotoSlideshow'; // Import the slideshow component
import './App.css';

function Suggestions() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="full-screen-container">
      {/* Insert the photo slideshow */}
      <PhotoSlideshow />

      <h1>Valentine's Day Suggestions</h1>
      <li>
        Getting Oysters
      </li>
      <li>
        Fun Date at Level 99
      </li>
      <li>
        Romantic Movie Night
      </li>

      <button onClick={handleBackClick} className="back-button">
        Back to Home
      </button>
    </div>
  );
}

export default Suggestions;
