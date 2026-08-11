import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>5000+</h3>
        <p>Students</p>
      </div>
      <div className="stat-card">
        <h3>15+</h3>
        <p>Departments</p>
      </div>
      <div className="stat-card">
        <h3>10+</h3>
        <p>Programs</p>
      </div>
    </div>
  );
};

export default Statistics;