import React, { useState } from 'react';

import { FaEnvelope, FaPhone, FaLock } from 'react-icons/fa'; 
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); 
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobilePattern = /^[0-9]{10}$/; 
   
    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
   
    if (!mobilePattern.test(mobileNumber)) {
      setMessage('Please enter a valid mobile number (10 digits).');
      return;
    }
    if (email && mobileNumber && password) {
      setMessage(`Login Successful! Welcome ${email}`);
    } else {
      setMessage('Please fill in all fields.');
    }
  };
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    isFormVisible && (  
      <div className="form2">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-container">
            <h3><FaEnvelope /> Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-container">
            <h3><FaPhone /> Mobile Number</h3>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div className="input-container">
            <h3><FaLock /> Password</h3>
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required/>
          </div>
          
          <button type="submit" className="small-button">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    )
  );
};

export default Login;;