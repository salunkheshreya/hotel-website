import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../config';
import './BookingForm.css';
const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract from state passed by the Room pages
  const { roomType = 'Standard', price = 1000.00 } = location.state || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      setMessage('Please enter a valid 10-digit phone number.');
      return;
    }
    if (new Date(checkInDate) < new Date(today)) {
      setMessage('Check-in date cannot be in the past.');
      return;
    }
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      setMessage('Check-out date must be later than Check-in date.');
      return;
    }

    // Calculate nights for real price
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;
    const finalPrice = parseFloat(price) * nights;

    if (name && phoneNumber && email && address && checkInDate && checkOutDate) {
      try {
        const response = await fetch(`${config.API_BASE_URL}/book_hotel.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            guest_name: name,
            user_email: email,
            room_type: roomType,
            check_in: checkInDate,
            check_out: checkOutDate,
            guests: 2,
            total_price: finalPrice
          }),
        });

        const responseText = await response.text();
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          console.error("Failed to parse JSON:", responseText);
          throw new Error(`Server returned invalid JSON: ${responseText.substring(0, 100)}...`);
        }

        if (data.status === 'success') {
          setMessage('Booking Successful!');
          navigate('/pay-now', {
            state: { name, email, phoneNumber, address, checkInDate, checkOutDate }
          });
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage(`Booking failed: ${error.message}`);
      }
    } else {
      setMessage('Please fill in all fields.');
    }
  };
  const handleClear = () => {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setCheckInDate('');
    setCheckOutDate('');
    setMessage('');
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="form-container-5">
      <div className="booking-form-wrapper">
        <h2>Reserve Your Stay</h2>
        <form onSubmit={handleSubmit} className="form-grid">

          <div className="input-container full-width">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
              required
            />
          </div>

          <div className="input-container">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="input-container">
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="1234567890"
              required
            />
          </div>

          <div className="input-container full-width">
            <label>Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your complete address"
              required
            />
          </div>

          <div className="input-container">
            <label>Check-in Date</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={today}
              required
            />
          </div>

          <div className="input-container">
            <label>Check-out Date</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate || today}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn-book">Confirm Booking</button>
            <button type="button" onClick={handleClear} className="btn-reset">Reset</button>
          </div>

          <button type="button" onClick={handleBack} className="btn-back">
            ← Back
          </button>

          {message && <div className={`message-box ${message.includes('Successful') ? 'message-success' : ''}`}>{message}</div>}

        </form>
      </div>
    </div>
  );
};

export default BookingForm;
