
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';
const BookingForm = () => {
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');

  const today = new Date().toISOString().split('T')[0]; 
  const handleSubmit = (e) => {
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
    if (name && phoneNumber && email && address && checkInDate && checkOutDate) {
      setMessage('Booking Successful!');
      navigate('/pay-now', { 
        state: { name, email, phoneNumber, address, checkInDate, checkOutDate }
      });
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
    <div className="form-container-5" >
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit} className='form1' style={{display:'flex',flexDirection:'column',marginLeft:'310px',border:'2px solid black',borderRadius:'5',padding:'20px',width:'50%'}}>
        <div className="input-container" >
          <h3>Name</h3>
          <input style={{width:'92%'}}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-container">
          <h3>Email</h3>
          <input style={{width:'92%'}}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-container">
          <h3>Phone Number</h3>
          <input style={{width:'92%'}}
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="input-container">
          <h3>Address</h3>
          <textarea style={{width:'92%'}}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="input-container">
          <h3>Check-in Date</h3>
          <input style={{width:'92%'}}
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            min={today} 
            required
          />
        </div>
        <div className="input-container">
          <h3>Check-out Date</h3>
          <input style={{width:'92%'}}
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            min={checkInDate}
            required
          />
        </div>
        <button  className='btn btn-outline-info' style={{width:'30%',marginLeft:'80px',marginTop:'10px'}} type="submit">Book Now</button>
        <button className='btn btn-outline-info'   type="button" onClick={handleClear} style={{width:'30%',marginTop:'-38px' ,marginLeft:'290px'}}>
          Reset
        </button>
      </form>
      <button className='btn btn-outline-success ' style={{width:'100px',marginBottom:'50px',marginLeft:'290px'}} onClick={handleBack}>
        Back
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
