import React from 'react';
import './Testimonial.css';
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
  return (
    <div className='test'><h2 className='test1' style={{fontSize:'50px',fontFamily:'serif'}}>Testimonial</h2>
    <div className="testimonial-container">{testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-card">
          <blockquote>{`"${testimonial.quote}"`}</blockquote>
          <p>{testimonial.name}</p>  
      </div>
       ))}
      </div>
    </div>
  );
};
export default Testimonial;

