import React, { useState } from 'react';
import config from '../config';

import { FaEnvelope, FaPhone, FaLock } from 'react-icons/fa';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const mobilePattern = /^[0-9]{10}$/; 

    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // if (!mobilePattern.test(mobileNumber)) {
    //   setMessage('Please enter a valid mobile number (10 digits).');
    //   return;
    // }

    if (email && password) {
      try {
        const response = await fetch(`${config.API_BASE_URL}/login.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
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
          setMessage(`Login Successful! Welcome ${data.user.name}`);
          // You might want to store the user in localStorage here
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage(`Login failed: ${error.message}`);
      }
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    isFormVisible && (
      <div className="auth-container">
        <div className="auth-image-side">
          <div className="auth-overlay">
            <h1>Welcome Back</h1>
            <p>Experience luxury like never before.</p>
          </div>
        </div>
        <div className="auth-form-side">
          <div className="form-wrapper">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
              <div className="auth-input-group">
                <label><FaEnvelope /> Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="auth-input-group">
                <label><FaLock /> Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="auth-button">Login</button>
            </form>
            {message && <p className="auth-message">{message}</p>}
            <p className="auth-redirect">
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;;