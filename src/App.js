// src/App.js
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from './components/ImageCarousel';
import './components/styles.css';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import './App.css';

import AvailabilityForm from './components/AvailabilityForm';
import Filter from './components/FIlters';
import KidsRoom from './components/KidsRoom';
import DeluxeRoom from './components/DeluxeRoom';
import SemiDeluxeRoom from './components/SemiDeluxeRoom';
import FamilyRoom from './components/FamilyRoom';
import BookingForm from './components/BookingForm';
import PayNowForm from './components/PayNowForm';
import BookingConfirmation from './components/BookingConfirmation';
import Hotels from './Hotels';
import Location from './components/Location';
import Details from './components/Details';

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1 },
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<motion.div {...pageTransition}><Home /><ImageCarousel /><AvailabilityForm /><Facilities /><Testimonial /></motion.div>} />

        {/* Filter and Hotels */}
        <Route path='/hotels' element={<Hotels />} />

        {/* Room pages */}
        <Route path="/rooms" element={<div><Rooms /></div>} />
        <Route path="/rooms/kids-room" element={<KidsRoom />} />
        <Route path="/rooms/deluxe-room" element={<DeluxeRoom />} />
        <Route path="/rooms/semi-deluxe-room" element={<SemiDeluxeRoom />} />
        <Route path="/rooms/family-room" element={<FamilyRoom />} />
        <Route path="/rooms/Location" element={<Location />} />
        <Route path='/Details' element={<Details />} />

        {/* Static pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* User Authentication pages */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Booking related pages */}
        <Route path='/booking' element={<BookingForm />} />
        <Route path='/pay-now' element={<PayNowForm />} />
        <Route path='/booking-confirmation' element={<BookingConfirmation />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
