import React, { useState } from 'react';
import config from '../config';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch(`${config.API_BASE_URL}/submit_contact.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.status === 'success') {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <div className="contact-us-container">
      <h1 className='h1'>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea className='m1' id="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Send</button>
        {status && <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
