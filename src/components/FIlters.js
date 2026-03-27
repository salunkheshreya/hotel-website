import React, { useState } from 'react';
import './Filters.css'

const Filter = ({ onFilterChange }) => {
     const [filters, setFilters] = useState({
          location: '',
          minPrice: '',
          maxPrice: '',
          popular: [],
          propertyType: [],
          rating: 0,
          features: [],
          facilities: []
     });

     const handleTextChange = (e, field) => {
          setFilters(prev => ({ ...prev, [field]: e.target.value }));
     };

     const handleCheckboxChange = (e, category) => {
          const { id, checked } = e.target;
          setFilters(prev => {
               const newList = checked
                    ? [...prev[category], id]
                    : prev[category].filter(item => item !== id);
               return { ...prev, [category]: newList };
          });
     };

     const handleRatingChange = (val) => {
          setFilters(prev => ({ ...prev, rating: val }));
     };

     const handleApply = () => {
          if (onFilterChange) {
               onFilterChange(filters);
          }
     };

     return (
          <div className="hotel-filters">
               <h3 className="filter-title">Filter Your Search</h3>

               <div className="filter-section">
                    <h4>Location</h4>
                    <select value={filters.location} onChange={e => handleTextChange(e, 'location')}>
                         <option value="">All Locations</option>
                         <option value="Jaipur">Jaipur</option>
                         <option value="Kerala">Kerala</option>
                         <option value="Bangalore">Bangalore</option>
                         <option value="Manali">Manali</option>
                         <option value="TamilNadu">TamilNadu</option>
                         <option value="Pune">Pune</option>
                         <option value="Goa">Goa</option>
                         <option value="Mumbai">Mumbai</option>
                         <option value="Hydrabadh">Hyderabad</option>
                         <option value="Ooty">Ooty</option>
                         <option value="Shimla">Shimla</option>
                         <option value="Shrinagar">Srinagar</option>
                    </select>
               </div>

               <div className="filter-section">
                    <h4>Price Range</h4>
                    <div className="price-range-wrapper">
                         <input type="number" min="0" placeholder="Min Price" className="price-input" value={filters.minPrice} onChange={e => handleTextChange(e, 'minPrice')} />
                         <span className="to-text">to</span>
                         <input type="number" max="500000" placeholder="Max Price" className="price-input" value={filters.maxPrice} onChange={e => handleTextChange(e, 'maxPrice')} />
                    </div>
               </div>

               <div className="filter-section">
                    <h4>Popular Filters</h4>
                    <ul>
                         <li><label htmlFor="breakfast"><input type="checkbox" id="breakfast" checked={filters.popular.includes('breakfast')} onChange={e => handleCheckboxChange(e, 'popular')} /> Breakfast Included</label></li>
                         <li><label htmlFor="free-cancellation"><input type="checkbox" id="free-cancellation" checked={filters.popular.includes('free-cancellation')} onChange={e => handleCheckboxChange(e, 'popular')} /> Free Cancellation</label></li>
                         <li><label htmlFor="pool"><input type="checkbox" id="pool" checked={filters.popular.includes('pool')} onChange={e => handleCheckboxChange(e, 'popular')} /> Pool</label></li>
                         <li><label htmlFor="Instant Confirmation"><input type="checkbox" id="Instant Confirmation" checked={filters.popular.includes('Instant Confirmation')} onChange={e => handleCheckboxChange(e, 'popular')} /> Instant Confirmation</label></li>
                    </ul>
               </div>

               <div className="filter-section">
                    <h4>Property Type</h4>
                    <ul>
                         <li><label htmlFor="hotel"><input type="checkbox" id="hotel" checked={filters.propertyType.includes('hotel')} onChange={e => handleCheckboxChange(e, 'propertyType')} /> Hotel</label></li>
                         <li><label htmlFor="resort"><input type="checkbox" id="resort" checked={filters.propertyType.includes('resort')} onChange={e => handleCheckboxChange(e, 'propertyType')} /> Resort</label></li>
                         <li><label htmlFor="vila"><input type="checkbox" id="vila" checked={filters.propertyType.includes('vila')} onChange={e => handleCheckboxChange(e, 'propertyType')} /> Villa</label></li>
                         <li><label htmlFor="apartment"><input type="checkbox" id="apartment" checked={filters.propertyType.includes('apartment')} onChange={e => handleCheckboxChange(e, 'propertyType')} /> Apartment</label></li>
                         <li><label htmlFor="pg"><input type="checkbox" id="pg" checked={filters.propertyType.includes('pg')} onChange={e => handleCheckboxChange(e, 'propertyType')} /> PG</label></li>
                    </ul>
               </div>

               <div className="filter-section">
                    <h4>Rating</h4>
                    <ul>
                         <li><label><input type="radio" name="rating" checked={filters.rating === 1} onChange={() => handleRatingChange(1)} /> ★ 1 Star & Up</label></li>
                         <li><label><input type="radio" name="rating" checked={filters.rating === 2} onChange={() => handleRatingChange(2)} /> ★★ 2 Stars & Up</label></li>
                         <li><label><input type="radio" name="rating" checked={filters.rating === 3} onChange={() => handleRatingChange(3)} /> ★★★ 3 Stars & Up</label></li>
                         <li><label><input type="radio" name="rating" checked={filters.rating === 4} onChange={() => handleRatingChange(4)} /> ★★★★ 4 Stars & Up</label></li>
                         <li><label><input type="radio" name="rating" checked={filters.rating === 5} onChange={() => handleRatingChange(5)} /> ★★★★★ 5 Stars</label></li>
                         <li><label><input type="radio" name="rating" checked={filters.rating === 0} onChange={() => handleRatingChange(0)} /> Any Rating</label></li>
                    </ul>
               </div>

               <div className="filter-section">
                    <h4>Hotel Features</h4>
                    <ul>
                         <li><label htmlFor="wifi"><input type="checkbox" id="wifi" checked={filters.features.includes('wifi')} onChange={e => handleCheckboxChange(e, 'features')} /> Wi-Fi</label></li>
                         <li><label htmlFor="parking"><input type="checkbox" id="parking" checked={filters.features.includes('parking')} onChange={e => handleCheckboxChange(e, 'features')} /> Parking</label></li>
                         <li><label htmlFor="gym"><input type="checkbox" id="gym" checked={filters.features.includes('gym')} onChange={e => handleCheckboxChange(e, 'features')} /> Gym</label></li>
                         <li><label htmlFor="Family Hotel"><input type="checkbox" id="Family Hotel" checked={filters.features.includes('Family Hotel')} onChange={e => handleCheckboxChange(e, 'features')} /> Family Hotel</label></li>
                         <li><label htmlFor="Private villa"><input type="checkbox" id="Private villa" checked={filters.features.includes('Private villa')} onChange={e => handleCheckboxChange(e, 'features')} /> Private Villa</label></li>
                    </ul>
               </div>

               <div className="filter-section">
                    <h4>Facilities & Services</h4>
                    <ul>
                         <li><label htmlFor="restaurant"><input type="checkbox" id="restaurant" checked={filters.facilities.includes('restaurant')} onChange={e => handleCheckboxChange(e, 'facilities')} /> Restaurant</label></li>
                         <li><label htmlFor="bar"><input type="checkbox" id="bar" checked={filters.facilities.includes('bar')} onChange={e => handleCheckboxChange(e, 'facilities')} /> Bar</label></li>
                         <li><label htmlFor="spa"><input type="checkbox" id="spa" checked={filters.facilities.includes('spa')} onChange={e => handleCheckboxChange(e, 'facilities')} /> Spa</label></li>
                    </ul>
               </div>

               <button type="button" className="filter-button" onClick={handleApply}>Apply Filters</button>
          </div>
     )
}
export default Filter;