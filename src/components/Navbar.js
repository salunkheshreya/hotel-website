// src/Navbar.js
import { Link,Outlet } from 'react-router-dom';
import React from 'react';

import logo from '../components/logo.jpg'; // Ensure logo.png is in the src folder
import './Navbar.css';
function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
      <Link to="#" className="navbar-logo" ><img src={logo} alt='logo'/></Link>
      <ul  className='navbar-nav'>
        <li className='nav-item'><Link to="/">Home</Link></li>
        <li className='nav-item'><Link to="/hotels">Hotels</Link> </li>
        <li className='nav-item'><Link to="/rooms">Rooms</Link></li>
        
        <li className='nav-item'><Link  to="/contact">Contact</Link></li>
        <li className='nav-item'><Link to="/about">About</Link></li>
        <li className='nav-item'><Link to="/booking">Booking</Link></li>
        </ul>
        <ul className='navbar-nav'>
         <li className='nav-item ms-auto h-10'>
           <button style={{width:120}} className='btn btn-outline-light m-2 p-2 rounded-4 text-align-center'><Link to="/login">Login</Link></button>
        </li>
        <li className='nav-item '>
         <button style={{width:120}} className='btn btn-outline-light m-2 p-2 rounded-4'><Link to="/register">Register</Link></button> 
        </li>  
      </ul>
    </nav>
    <Outlet/>
    </div>
  );
}
export default Navbar;
