import React, { useState } from 'react';


import { useNavigate } from 'react-router-dom';
import './PayNowForm.css';
const PayNowForm = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'debit' || paymentMethod === 'credit') {
      const cardPattern = /^[0-9]{12,18}$/;
      if (!cardPattern.test(cardNumber)) {
        setMessage('Card number must be between 12 and 18 digits.');
        return;
      }

      const cvvPattern = /^[0-9]{3,4}$/;
      if (!cvvPattern.test(cvv)) {
        setMessage('CVV must be 3 or 4 digits.');
        return;
      }

      const today = new Date();
      const expireDateObj = new Date(expireDate);
      if (
        expireDateObj.getFullYear() < today.getFullYear() ||
        (expireDateObj.getFullYear() === today.getFullYear() && expireDateObj.getMonth() < today.getMonth())
      ) {
        setMessage('Expiration date must be after the current month and year.');
        return;
      }
    }
   if (paymentMethod === 'upi' && upiId !== '') {

  }
    if (!amount || amount <= 0) {
      setMessage('Please enter a valid amount.');
      return;
    }
    const bookingDetails = {
      name,
      email,
      checkInDate,
      checkOutDate,
      paymentMethod,
      amount,
      bookingDate: new Date().toLocaleDateString(),
    };
    setMessage('Payment Successful!');
    setTimeout(() => {
      navigate('/booking-confirmation', { state: { bookingDetails } });
    }, 1500); 
  };

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="pay-now-form-container">
      <h2>Pay Now</h2>
      <form onSubmit={handleSubmit} className="pay-now-form1">
      
        <div className="input-container">
          <h3>Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <h3>Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <h3>Check-in Date</h3>
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <h3>Check-out Date</h3>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <h3>Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="debit">Debit Card</option>
            <option value="credit">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="hotel">Pay at Hotel</option>
          </select>
        </div>
        {(paymentMethod === 'debit' || paymentMethod === 'credit') && (
          <>
            <div className="input-container">
              <h3>Card Number</h3>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength={18}
                required
              />
            </div>
            <div className="input-container">
              <h3>Expiry Date</h3>
              <input
                type="month"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <h3>CVV</h3>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={4}
                required
              />
            </div>
          </>
        )}
        {paymentMethod === 'upi' && (
          <>
            <div className="input-container">
              <h3>UPI ID</h3>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter your UPI ID"
                required
              />
            </div>
          </>
        )}
        <div className="input-container">
          <h3>Amount</h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-outline-success ' style={{ marginLeft:'200px' }} type="submit">Pay Now</button>
      </form>
      <button className='btn btn-outline-success' onClick={handleBack} style={{ marginTop: '-65px',marginLeft:'400px' }}>
        Back
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PayNowForm;