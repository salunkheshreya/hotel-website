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
      <form onSubmit={handleSubmit} className="pay-now-form1">
        <h2>Secure Payment</h2>
        <div className="input-container">
          <h3>Full Name</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name on card"
            required
          />
        </div>
        <div className="input-container">
          <h3>Email Address</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Receipt email"
            required
          />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="input-container" style={{ flex: 1 }}>
            <h3>Check-in</h3>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="input-container" style={{ flex: 1 }}>
            <h3>Check-out</h3>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-container">
          <h3>Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method...</option>
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
                placeholder="0000 0000 0000 0000"
                required
              />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div className="input-container" style={{ flex: 1 }}>
                <h3>Expiry Date</h3>
                <input
                  type="month"
                  value={expireDate}
                  onChange={(e) => setExpireDate(e.target.value)}
                  required
                />
              </div>
              <div className="input-container" style={{ flex: 1 }}>
                <h3>CVV</h3>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength={4}
                  placeholder="123"
                  required
                />
              </div>
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
                placeholder="example@upi"
                required
              />
            </div>
          </>
        )}
        <div className="input-container">
          <h3>Amount (₹)</h3>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>

        <div className="pay-btn-group">
          <button className="btn-pay" type="submit">Process Payment</button>
          <button className="btn-back-pay" type="button" onClick={handleBack}>
            ← Return
          </button>
        </div>
        {message && <div className="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default PayNowForm;