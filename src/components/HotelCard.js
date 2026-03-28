import React from "react";
import { Link } from "react-router-dom";
import './HotelCard.css'


const HotelCard = ({ title, image, description, price,location,rating,}) => {
    // console.log("Rating:", rating, "Reviews:", reviews);
    return (
      <div className="hotel-card">
        <img src={image} alt={title} className="hotel-card-image" />
        <div className="hotel-card-content">
          <h3 className="hotel-card-title">{title}</h3>
          <p className="rating-score"> {rating}⭐</p> 
          <p  className='hotel-card-location'>{location}</p> 
          <p className="hotel-card-description">{description}</p>
          <p className='hotel-card-price'> ₹{price}</p>
          
         <Link to="/rooms" state={{ hotelName: title, location }}
            className="book-now-button btn btn-outline-secondary" 
           > View Room
          </Link>
        </div>
      </div>
    );
  };
  
  export default HotelCard;