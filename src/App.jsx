// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Suggestions from './Suggestions';
import HeartsBackground from './HeartsBackground'; // if applicable
import MusicMoodIntegration from './MusicMoodIntegration'; // our background music component
import './App.css';

function App() {
  return (
    <>
      <HeartsBackground />
      <MusicMoodIntegration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggestions" element={<Suggestions />} />
      </Routes>
    </>
  );
}

export default App;
