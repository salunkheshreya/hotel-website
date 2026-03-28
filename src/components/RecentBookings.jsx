import React, { useState, useEffect } from 'react';
import config from '../config';
import './RecentBookings.css';

const RecentBookings = ({ userEmail }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/get_bookings.php?email=${userEmail}`);
        const data = await response.json();
        if (data.status === 'success') {
          setBookings(data.bookings);
        } else {
          setError(data.message || 'Failed to fetch bookings');
        }
      } catch (err) {
        setError('Network error: Unable to load bookings.');
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchBookings();
    }
  }, [userEmail]);

  if (loading) return <div className="recent-bookings-loading">Loading your history...</div>;
  if (error) return <div className="recent-bookings-error">❌ {error}</div>;

  return (
    <div className="recent-bookings-wrapper">
      <h3>Your Recent Bookings</h3>
      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found for <strong>{userEmail}</strong>.</p>
      ) : (
        <div className="bookings-table-container">
          <table className="bookings-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Room Type</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="booking-id">{booking.id}</td>
                  <td>{booking.room}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                  <td className="booking-amount">₹{booking.amount}</td>
                  <td>
                    <span className={`status-badge ${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentBookings;
