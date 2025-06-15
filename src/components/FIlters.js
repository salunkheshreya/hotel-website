import React, { useState } from 'react';
import './Filters.css'

const Filter = () => {
  return(
  
   <div class="hotel-filters" >

        <h3 style={{fontSize:'23px',fontFamily:'Times new roman',fontWeight:'bold'}}>Filter Your Search</h3>
        <div class="filter-section">
           <h4>Location</h4>
               <select>
                 <option value="">All Locations</option>
                 <option value="Jaipur">Jaipur</option>
                 <option value="Kerala">Kerala</option>
                 <option value="Bangalore">Bangalore</option>
                 <option value="Manali">Manali</option>
                 <option value="TamilNadu">TamilNadu</option>
                 <option value="Pune">Pune</option>
                 <option value="Goa">Goa</option>
                 <option value="Mumbai">Mumbai</option>
                 <option value="Hydrabadh">Hydrabadh</option>
                 <option value="Ooty">Ooty</option>
                 <option value="Shimla">Shimla</option>
                 <option value="Shrinagar">Shrinagar</option>
                
              </select>
        </div>

        <div class="filter-section">
           <h4>Price Range</h4>
               

                <input type="number" min="0" placeholder="Min Price" class="price-input" />
                <span class="to-text">to</span>
                <input type="number" max="500000" placeholder="Max Price" class="price-input" />
                <button style={{marginLeft:'90px'}} id="submitBtn" class="submit-button">→</button>
        </div>
        
<br></br>
       <div class="filter-section">
             <h4>Popular Filters</h4>
              <ul>
                 <li><input type="checkbox" id="breakfast"/> <label for="breakfast">Breakfast Included</label></li>
                 <li><input type="checkbox" id="free-cancellation"/> <label for="free-cancellation">Free Cancellation</label></li>
                 <li><input type="checkbox" id="pool"/> <label for="pool">Pool</label></li>
                 <li><input type="checkbox" id="Instant Confirmation"/> <label for="Instant Confirmation">Instant Confirmation</label></li>
                
              </ul>
       </div>
       <br></br>
  
       <div class="filter-section">
           <h4>Property Type</h4>
           <ul>
                <li><input type="checkbox" id="hotel"/> <label for="hotel">Hotel</label></li>
                <li><input type="checkbox" id="resort"/> <label for="resort">Resort</label></li>
                <li><input type="checkbox" id="vila"/> <label for="vila">Vila</label></li>
                <li><input type="checkbox" id="apartment"/> <label for="apartment">Apartment</label></li>
                <li><input type="checkbox" id="pg"/> <label for="pg">Pg</label></li>
           </ul>
      </div>
<br></br>
      <div class="filter-section">
           <h4>Rating</h4>
           <ul>
             
             <li><label><input type="radio" name="rating"/>★</label></li>
              
             <li><label><input type="radio" name="rating"/>★★</label></li>
              
             <li><label><input type="radio" name="rating"/>★★★</label></li>
              
             <li><label><input type="radio" name="rating"/>★★★★</label></li>
              
             <li><label><input type="radio" name="rating"/>★★★★★</label></li>
            </ul>
       </div>
  <br></br>
       <div class="filter-section">
               <h4>Hotel Features</h4>
              <ul>
                  <li><input type="checkbox" id="wifi"/> <label for="wifi">Wi-Fi</label></li>
                  <li><input type="checkbox" id="parking"/> <label for="parking">Parking</label></li>
                 <li><input type="checkbox" id="gym"/> <label for="gym">Gym</label></li>
                 <li><input type="checkbox" id="Family Hotel"/> <label for="Family Hotel">Family Hotel</label></li>
                 <li><input type="checkbox" id="Private villa"/> <label for="Private villa">Private villa</label></li>
                 
             </ul>
        </div>
  <br></br>
        <div class="filter-section">
                <h4>Hotel Facilities & Services</h4>
                 <ul>
                     <li><input type="checkbox" id="restaurant"/> <label for="restaurant">Restaurant</label></li>
                     <li><input type="checkbox" id="bar"/> <label for="bar">Bar</label></li>
                     <li><input type="checkbox" id="spa"/> <label for="spa">Spa</label></li>
                     <li><input type="checkbox" id="bar"/> <label for="bar">Bar</label></li>
                     <li><input type="checkbox" id="spa"/> <label for="spa">Spa</label></li>
                </ul>
        </div>
  <br></br>
          <button style={{marginLeft:50}}  type="submit" class="filter-button btn btn-outline-success rounded-5"  >Apply Filters</button>
  </div>
  )
    
}
export default Filter;