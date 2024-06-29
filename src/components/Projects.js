// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Details about project 1...</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Details about project 2...</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Projects;
