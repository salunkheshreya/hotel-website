import React from 'react';
import { Link } from 'react-router-dom';
const RoomCard = ({ title, image, description, price, category, available }) => {
  return (
    <div className={`room-card ${available ? 'available' : 'unavailable'}`}>
      <img src={image} alt={title} className="room-card-image" />
      <div className="room-card-content">
        <h3 className="room-card-title">{title}</h3>
        <p className="room-card-category">{category}</p>
        <p className="room-card-description">{description}</p>
        <p className="room-card-price">${price} per night</p>
        {available ? (
          <Link to={{pathname: '/booking',state: { title, image, price } }} 
            className="book-now-button"> Book Now</Link>
        ) : (
          <button className="unavailable-button" disabled> Unavailable</button>
)}
      </div>
    </div>
  );
};
export default RoomCard;
