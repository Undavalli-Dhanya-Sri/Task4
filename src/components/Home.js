// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="headline">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a passionate Web Developer</p>
      </div>
      <img src="path-to-your-photo.jpg" alt="Your Name" className="profile-photo" />
      <div className="skills-summary">
        <p>Summary of your skills...</p>
      </div>
    </div>
  );
};

export default Home;
