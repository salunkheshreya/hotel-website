import React, { useState } from 'react';


import { FaUser, FaEnvelope, FaPhone, FaLock, FaMapMarkerAlt, FaImage, } from 'react-icons/fa'; 
import { TbMapPinCode } from "react-icons/tb";
import './Register.css';
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); 

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      name && email && phoneNumber && address && pinCode &&
      password && confirmPassword && profilePicture
    ) {
      if (password === confirmPassword) {
        setMessage('Registration Successful!');
      } else {
        setMessage('Passwords do not match.');
      }
    } else {
      setMessage('Please fill in all fields.');
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };


  return (
    isFormVisible && ( 
      <div className="form-container" style={{ position: 'relative' }}>
   
        <h2>Registration</h2>
        <form onSubmit={handleRegister} className="registration-form">
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><FaUser /> Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><FaEnvelope /> Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><FaPhone /> Phone Number</h3>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><FaImage /> Profile Picture</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {profilePicture && (
              <div>
                <img
                  src={profilePicture}
                  alt="Profile Preview"
                  style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }}
                />
              </div>
            )}
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}} ><FaMapMarkerAlt /> Address</h3>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><TbMapPinCode />Pin Code</h3>
            <input
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              placeholder="Enter your pin code"
              required
            />
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><FaLock /> Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-container">
            <h3 style={{fontSize:'20px'}}><FaLock /> Confirm Password</h3>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="small-button">Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    )
  );
};

export default RegistrationForm;