import React, { useState } from 'react';
import './Testimonial.css';
import ReviewInsights from './ReviewInsights';
import { AnimatePresence, motion } from 'framer-motion';
import { IoSparklesOutline, IoPeopleOutline } from 'react-icons/io5';

const testimonials = [
  {
    name: 'Shreya Salunkhe',
    quote: 'This service is amazing! It has completely transformed business.', 
  },
  {
    name: 'Sonia singh',
    quote: 'Excellent customer support and top-notch quality is required.', 
  },
  {
    name: 'Shreya Salunke',
    quote: 'I love the convenience and the fantastic results I got the found.',
  },
  {
    name: 'Riya Desai',
    quote: 'Reliable and efficient service. Couldn’t ask for more!',
  },
];

const Testimonial = () => {
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className='test'>
      <div className="testimonial-header">
        <h2 className='test1' style={{fontSize:'50px',fontFamily:'serif'}}>Testimonial</h2>
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${!showInsights ? 'active' : ''}`}
            onClick={() => setShowInsights(false)}
          >
            <IoPeopleOutline />
            <span>Reviews</span>
          </button>
          <button 
            className={`toggle-btn ${showInsights ? 'active' : ''}`}
            onClick={() => setShowInsights(true)}
          >
            <IoSparklesOutline />
            <span>AI Insights</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showInsights ? (
          <motion.div 
            key="reviews"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="testimonial-container"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <blockquote>{`"${testimonial.quote}"`}</blockquote>
                <p>{testimonial.name}</p>  
              </div>
            ))}
          </motion.div>
        ) : (
          <ReviewInsights reviews={testimonials} />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Testimonial;

