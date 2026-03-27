  
  import React, { useState } from 'react';


  import {useNavigate} from 'react-router-dom'
  import './AvailabilityForm.css'
  function AvailabilityForm() {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0); 
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault();
      //navigate to the hotel page with the form data (if needed)
      navigate('/hotels',{state:{checkInDate,checkOutDate,adults,children}});
    
    };
    return (
      <div id='carousel' class="carousel-container" >
      <div className='form'>
        <h3>Check Booking Availability</h3>
        <form onSubmit={handleSubmit}>
          <label  for="check-in">Check-in Date:
            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required /> </label>
          <label for="check-out">Check-out Date:
            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required /> </label>
          <label for="adults"> Number of Adults:
            <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} required min="1" /></label>
          <label for="children"> Number of Childrens:
            <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} required min="0" /> </label>
              <button   className='btn btn-outline-success rounded-5 m-5 p-10 ' type="submit">Search</button>
          </form>
       </div>
      </div>
    );
  }
   export default AvailabilityForm;
  

