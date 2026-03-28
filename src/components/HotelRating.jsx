import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import './HotelRating.css';

const ratings = [
  { emoji: '😠', label: 'Very Bad', color: '#ff4b2b' },
  { emoji: '🙁', label: 'Bad', color: '#ff9800' },
  { emoji: '😐', label: 'OK', color: '#ffeb3b' },
  { emoji: '🙂', label: 'Good', color: '#8bc34a' },
  { emoji: '🤩', label: 'Very Good', color: '#40e474' }
];

const HotelRating = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="hotel-rating-card">
      <AnimatePresence mode='wait'>
        {!isSubmitted ? (
          <motion.div 
            key="rating-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rating-form-container"
          >
            <h3>How was your experience?</h3>
            <p>Tell us what you think by selecting an emoji below.</p>
            
            <div className="emoji-grid">
              {ratings.map((rate, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`emoji-wrapper ${selectedRating === index ? 'selected' : ''}`}
                  onClick={() => setSelectedRating(index)}
                  style={{ '--rating-color': rate.color }}
                >
                  <span className="emoji">{rate.emoji}</span>
                  <span className="emoji-label">{rate.label}</span>
                </motion.div>
              ))}
            </div>

            <button 
              className={`submit-rating-btn ${selectedRating === null ? 'disabled' : ''}`}
              onClick={handleSubmit}
              disabled={selectedRating === null}
            >
              Submit Rating
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="thank-you"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="thank-you-container"
          >
            <IoCheckmarkCircleOutline className="thank-you-icon" />
            <h3>Thank You!</h3>
            <p>Your feedback helps us provide a better experience for everyone.</p>
            <div className="selected-result">
                Rated: <strong>{ratings[selectedRating].label} {ratings[selectedRating].emoji}</strong>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HotelRating;
