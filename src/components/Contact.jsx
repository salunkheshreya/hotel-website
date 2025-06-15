import React from 'react';


import './Contact.css';
const Contact = () => {
   return (
    <div className="contact-us-container">
      <h1 className='h1'>Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name:</label><input type="text" id="name" required />
        <label htmlFor="email">Email:</label><input type="email" id="email" required />
        <label  htmlFor="message">Message:</label><textarea className='m1' id="message" required></textarea>
        <button type="submit">Send</button>
      </form>
      </div>
  );
};
export default Contact;
