import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './BookingConfirmation.css';
import HotelRating from './HotelRating';
import { IoClose } from 'react-icons/io5';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};

  const handleDownload = () => {
    if (bookingDetails) {
      const doc = new jsPDF();

      // Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(26, 35, 126);
      doc.text("Luxury Inn", 105, 20, { align: "center" });

      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text("Booking Confirmation Receipt", 105, 30, { align: "center" });

      // Line
      doc.setLineWidth(0.5);
      doc.line(20, 35, 190, 35);

      // Content
      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);

      let startY = 45;
      const lh = 10;

      doc.setFont("helvetica", "bold"); doc.text("Guest Name:", 20, startY);
      doc.setFont("helvetica", "normal"); doc.text(bookingDetails.name || "", 60, startY);

      startY += lh;
      doc.setFont("helvetica", "bold"); doc.text("Email:", 20, startY);
      doc.setFont("helvetica", "normal"); doc.text(bookingDetails.email || "", 60, startY);

      startY += lh;
      doc.setFont("helvetica", "bold"); doc.text("Check-in:", 20, startY);
      doc.setFont("helvetica", "normal"); doc.text(bookingDetails.checkInDate || "", 60, startY);

      startY += lh;
      doc.setFont("helvetica", "bold"); doc.text("Check-out:", 20, startY);
      doc.setFont("helvetica", "normal"); doc.text(bookingDetails.checkOutDate || "", 60, startY);

      startY += lh;
      doc.setFont("helvetica", "bold"); doc.text("Date Issued:", 20, startY);
      doc.setFont("helvetica", "normal"); doc.text(bookingDetails.bookingDate || new Date().toLocaleDateString(), 60, startY);

      // Line
      startY += 10;
      doc.line(20, startY, 190, startY);
      startY += 10;

      // Payment
      doc.setFont("helvetica", "bold"); doc.text("Method:", 20, startY);
      doc.setFont("helvetica", "normal");
      const method = bookingDetails.paymentMethod === 'hotel' ? 'Pay at Hotel' : (bookingDetails.paymentMethod || "").toUpperCase();
      doc.text(method, 60, startY);

      startY += lh;
      doc.setFont("helvetica", "bold"); doc.text("Total Paid:", 20, startY);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(40, 167, 69);
      doc.text(`INR ${bookingDetails.amount || 0}`, 60, startY);

      // Footer
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Thank you for choosing Luxury Inn! We wish you a pleasant stay.", 105, startY + 30, { align: "center" });

      doc.save('LuxuryInn_Receipt.pdf');
    }
  };

  const handleClose = () => {
    navigate('/hotels');
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <button onClick={handleClose} className="btn-close-overlay">
          <IoClose />
        </button>
        <h1 className="receipt-header"><span>✓</span>Booking Confirmed</h1>

        {bookingDetails ? (
          <>
            <div className="receipt-details">
              <div className="receipt-row">
                <span className="receipt-label">Guest Name</span>
                <span className="receipt-value">{bookingDetails.name}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Email</span>
                <span className="receipt-value">{bookingDetails.email}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Check-in</span>
                <span className="receipt-value">{bookingDetails.checkInDate}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Check-out</span>
                <span className="receipt-value">{bookingDetails.checkOutDate}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Method</span>
                <span className="receipt-value">{bookingDetails.paymentMethod === 'hotel' ? 'Pay at Hotel' : bookingDetails.paymentMethod.toUpperCase()}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Total Paid</span>
                <span className="receipt-value">₹{bookingDetails.amount}</span>
              </div>
            </div>

            <div className="receipt-actions">
              <button onClick={handleDownload} className="btn-download">
                Download Receipt ⬇
              </button>
              <button onClick={handleClose} className="btn-home">
                Return to Search
              </button>
            </div>
          </>
        ) : (
          <p className="error-state">No booking details available. Please try again.</p>
        )}
      </div>
      <HotelRating />
    </div>
  );
};

export default BookingConfirmation;