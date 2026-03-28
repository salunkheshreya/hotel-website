import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../config';
import './BookingForm.css';
import RecentBookings from './RecentBookings';
import { IoTimeOutline, IoCreateOutline } from 'react-icons/io5';

const BookingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract from state passed by the Room pages
  const { hotelName = 'Luxury Inn', location: hotelLocationFromState = 'Mumbai', roomType = 'Standard', price = 1000.00 } = location.state || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [message, setMessage] = useState('');
  const [showRecent, setShowRecent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setName(user.name || '');
      setEmail(user.email || '');
      setPhoneNumber(user.phone || '');
      setAddress(user.address || '');
      setIsLoggedIn(true);
    }
  }, []);

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
    const guestCount = Number(adults) + Number(children);
    const finalPrice = parseFloat(price) * nights * guestCount;

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
            guests: parseInt(adults) + parseInt(children),
            total_price: finalPrice,
            hotel_name: hotelName,
            location: hotelLocationFromState, // Dynamic location from state
            payment_done: 0.00 // Initially zero, updated after payment or set to min amount
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
            state: { 
              bookingDetails: {
                id: data.insertId, // Pass the ID from DB
                name, 
                email, 
                phoneNumber, 
                address, 
                checkInDate, 
                checkOutDate,
                roomType,
                amount: finalPrice,
                paymentMethod: 'credit_card'
              }
            }
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
    setAdults(1);
    setChildren(0);
    setMessage('');
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="form-container-5">
      <div className="booking-form-wrapper">
        <div className="booking-header">
           <h2>{showRecent ? 'Recent Bookings' : 'Reserve Your Stay'}</h2>
           {isLoggedIn && (
             <button 
               type="button" 
               className="toggle-recent-btn"
               onClick={() => setShowRecent(!showRecent)}
             >
               {showRecent ? <><IoCreateOutline /> Back to Booking</> : <><IoTimeOutline /> My Recent Bookings</>}
             </button>
           )}
        </div>

        {showRecent ? (
          <RecentBookings userEmail={email} />
        ) : (
          <form onSubmit={handleSubmit} className="form-grid">

            <div className="selection-summary full-width">
              <div className="input-container">
                <label>Selected Hotel</label>
                <input
                  type="text"
                  value={hotelName}
                  readOnly
                  className="readonly-input"
                />
              </div>
              <div className="input-container">
                <label>Room Category</label>
                <input
                  type="text"
                  value={roomType}
                  readOnly
                  className="readonly-input"
                />
              </div>
            </div>

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

            <div className="input-container">
              <label>Adults</label>
              <select 
                value={adults} 
                onChange={(e) => setAdults(e.target.value)} 
                required
                className="guest-select"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="input-container">
              <label>Children</label>
              <select 
                value={children} 
                onChange={(e) => setChildren(e.target.value)}
                className="guest-select"
              >
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} Child{num > 1 ? 'ren' : ''}</option>
                ))}
              </select>
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
        )}
      </div>
    </div>
  );
};

export default BookingForm;
