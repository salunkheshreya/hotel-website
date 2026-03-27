import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

import { FaUser, FaEnvelope, FaPhone, FaLock, FaMapMarkerAlt, FaImage, } from 'react-icons/fa';
import { TbMapPinCode } from "react-icons/tb";
import './Register.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      name && email && phoneNumber && address && pinCode &&
      password && confirmPassword && (profilePicture || profilePictureFile)
    ) {
      if (password !== confirmPassword) {
        setMessage('Passwords do not match.');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phoneNumber);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('pinCode', pinCode);

        // Handle file upload
        if (profilePictureFile) {
          formData.append('profilePicture', profilePictureFile);
        }

        const response = await fetch(`${config.API_BASE_URL}/register.php`, {
          method: 'POST',
          body: formData, // No headers needed for FormData, browser sets multipart/form-data
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
          setMessage('Registration Successful! Please Login.');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          setMessage(data.message || "Registration failed with unknown error.");
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage(`Registration failed: ${error.message}`);
      }
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
      setProfilePictureFile(file);
    }
  };

  return (
    isFormVisible && (
      <div className="auth-container">
        <div className="auth-image-side register-side">
          <div className="auth-overlay">
            <h1>Join Us</h1>
            <p>Create your account and start your journey.</p>
          </div>
        </div>
        <div className="auth-form-side">
          <div className="form-wrapper register-wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleRegister} className="login-form">

              <div className="input-row">
                <div className="auth-input-group">
                  <label><FaUser /> Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <label><FaEnvelope /> Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="input-row">
                <div className="auth-input-group">
                  <label><FaPhone /> Phone</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <label><TbMapPinCode /> Pin Code</label>
                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="Pin Code"
                    required
                  />
                </div>
              </div>

              <div className="auth-input-group">
                <label><FaMapMarkerAlt /> Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Complete Address"
                  required
                  rows="2"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                />
              </div>

              <div className="auth-input-group">
                <label><FaImage /> Profile Picture</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    id="file-upload"
                  />
                </div>
                {profilePicture && (
                  <img
                    src={profilePicture}
                    alt="Profile Preview"
                    style={{ width: '60px', height: '60px', objectFit: 'cover', marginTop: '10px', borderRadius: '50%' }}
                  />
                )}
              </div>

              <div className="input-row">
                <div className="auth-input-group">
                  <label><FaLock /> Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="auth-input-group">
                  <label><FaLock /> Confirm</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="auth-button">Register</button>
            </form>
            {message && <p className="auth-message">{message}</p>}
            <p className="auth-redirect">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default RegistrationForm;