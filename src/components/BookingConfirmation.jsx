import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {}; 

  const handleDownload = () => {
    if (bookingDetails) {
      const bookingInfo = `
        Booking Confirmation
        ---------------------
        Name: ${bookingDetails.name}
        Email: ${bookingDetails.email}
        Check-in Date: ${bookingDetails.checkInDate}
        Check-out Date: ${bookingDetails.checkOutDate}
        Payment Method: ${bookingDetails.paymentMethod}
        Amount Paid: ${bookingDetails.amount}
        Booking Date: ${bookingDetails.bookingDate}
      `;

      const blob = new Blob([bookingInfo], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'booking_confirmation.txt'; 
      link.click();
    }
  };

  const handleClose = () => {
    navigate('/login'); 
  };

  return (
    <div className="booking-confirmation">
      <h1>Your Booking Confirmation</h1>
      {bookingDetails ? (
        <div>
          
          <h3>Name: {bookingDetails.name}</h3>
          <h3>Email: {bookingDetails.email}</h3>
          <h3>Check-in Date: {bookingDetails.checkInDate}</h3>
          <h3>Check-out Date: {bookingDetails.checkOutDate}</h3>
          <h3>Payment Method: {bookingDetails.paymentMethod}</h3>
          <h3>Amount Paid: {bookingDetails.amount}</h3>
          <h3>Booking Date: {bookingDetails.bookingDate}</h3>

          <button onClick={handleDownload} style={{ marginTop: '20px' }}>
            Download Confirmation
          </button>

          <button onClick={handleClose}    style={{ width:'50px',marginTop: '10px', marginLeft: '10px',padding:"10px",
          backgroundColor: 'red', color: 'white' }}>X</button>
        </div>
      ) : (
        <p>No booking details available. Please try again.</p>
      )}
    </div>
  );
};

export default BookingConfirmation;