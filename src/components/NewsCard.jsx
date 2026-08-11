import React from 'react';
import './NewsCard.css';

const NewsCard = ({ image, title, date, description }) => {
  return (
    <div className="news-card">
      {image && <img src={image} alt={title} className="news-image" />}
      <div className="news-content">
        <h4>{title}</h4>
        <small>{date}</small>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;