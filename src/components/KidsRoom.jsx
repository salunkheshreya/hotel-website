import { useNavigate, useLocation } from "react-router-dom";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import './RoomDetails.css';

const KidsRoom = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { hotelName = 'Luxury Inn', location: hotelLocation = 'Mumbai' } = location.state || {};

    // event handler
    const handleClick = () => {
        navigate("/Details")
    }
    const handleBackClick = () => {
        navigate(-1)
    }
    function selectBreakfast() {
        alert("You selected a room with breakfast!");
    }
    function selectLunch() {
        alert("You selected a room with Breakfast & Lunch/Dinner");
    }
    return (
        <div className="room-page-container">
            <div className="room-page-header">
                <div>
                    <h1>Kids Room</h1>
                    <div className="room-stars">
                        <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
                    </div>
                </div>
                <button className="room-back-btn" onClick={handleBackClick}>← Back to Rooms</button>
            </div>

            <hr />

            <div className="room-content-flex">
                <div className="room-main-content">
                    <div className="room-images-grid">
                        <img src={'/assets/rooms/kroom2.jpg'} alt="Kids Room main" className="room-img-main" />
                        <img src={'/assets/rooms/kroom1.jpg'} alt="Kids Room view 2" />
                        <img src={'/assets/rooms/kroom3.jpg'} alt="Kids Room view 3" />
                    </div>

                    <p className="room-description-text">
                        "Unwind in luxury with plush beds, marble bathrooms, and spectacular city views that will leave you feeling pampered."
                    </p>

                    <div className="room-buttons-row">
                        <button className="btn-feature" onClick={handleClick}>📍 Location & Surroundings</button>
                        <button className="btn-feature" onClick={handleClick}>🍽️ Food & Dining</button>
                    </div>

                    <div className="room-amenities-section">
                        <h3>Room Amenities</h3>
                        <ul className="room-amenities-grid">
                            <li>✓ Free Wifi</li>
                            <li>✓ Television</li>
                            <li>✓ Swimming Pool</li>
                            <li>✓ On-Site Parking</li>
                            <li>✓ Gym</li>
                            <li>✓ Sofa</li>
                            <li>✓ Restaurant</li>
                            <li>✓ Large Balcony</li>
                            <li>✓ A/C</li>
                        </ul>
                    </div>

                    <div className="login-promo">
                        <h4>Login to unlock new Deals & manage your Booking!</h4>
                        <div className="login-form">
                            <input type="text" placeholder="Mobile No. (+91)" />
                            <Link to="/login" className="btn-login">Login</Link>
                        </div>
                    </div>
                </div>

                <div className="room-sidebar">
                    <div className="booking-card">
                        <h2>2 Queen Bed with Balcony</h2>
                        <div className="bed-info">Fits 4 Children</div>

                        <ul className="booking-card-perks">
                            <li>Complimentary Breakfast</li>
                            <li>15% Discount on Food & Beverages</li>
                            <li>Child 8 years & below stay for free</li>
                            <li>Non-Refundable</li>
                        </ul>

                        <div className="price-section">
                            <span className="price-label">Price per night:</span>
                            <h3 className="price-value">&#8377;5200</h3>
                            <span className="price-taxes">+600 taxes & Fees</span>
                        </div>

                        <Link to="/booking" state={{ hotelName, location: hotelLocation, roomType: 'Kids Room', price: 5200 }} className="btn-book-primary">
                            Book this now
                        </Link>
                    </div>

                    <div className="room-types-card">
                        <h3>Available Upgrades</h3>

                        <div className="room-type-option">
                            <div className="room-type-details">
                                <h4>Room with Breakfast</h4>
                                <ul>
                                    <li>Complimentary Breakfast</li>
                                    <li>Non-Refundable</li>
                                </ul>
                            </div>
                            <div className="room-type-action">
                                <div className="room-type-price">&#8377;5200</div>
                                <button className="btn-add-room" onClick={selectBreakfast}>Add Room</button>
                            </div>
                        </div>

                        <div className="room-type-option">
                            <div className="room-type-details">
                                <h4>Breakfast + Lunch/Dinner</h4>
                                <ul>
                                    <li>Complimentary Meals</li>
                                    <li>Non-Refundable</li>
                                </ul>
                            </div>
                            <div className="room-type-action">
                                <div className="room-type-price">&#8377;6000</div>
                                <button className="btn-add-room" onClick={selectLunch}>Add Room</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KidsRoom;