// src/MusicMoodIntegration.jsx
import React, { useState } from 'react';
import './MusicMoodIntegration.css';

function MusicMoodIntegration() {
  // Start with audio muted
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute state
  const handleMuteToggle = () => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  return (
    <div className="music-mood-fixed">
      {/* Mute/Unmute toggle button */}
      <button className="mute-button" onClick={handleMuteToggle}>
        {isMuted ? "Unmute Music" : "Mute Music"}
      </button>
      
      <audio
        id="background-music"
        src="/BackgroundMusic.mp3"  // Your MP3 file in the public folder
        autoPlay
        loop
        muted={isMuted}
        style={{ display: 'none' }} // Hide the default controls
      ></audio>
    </div>
  );
}

export default MusicMoodIntegration;
