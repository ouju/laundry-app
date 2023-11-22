// MyBookings.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import bookingsData from '../data/bookings.json';

function MyBookings() {
  const location = useLocation();
  const selectedSlot = location.state?.selectedSlot;
  const userId = "1010"; // Current user's ID
  const userData = bookingsData[userId];

  return (
    <div>
      <h2>My Bookings</h2>
      {selectedSlot && <p>! New booking made: {selectedSlot}</p>}
      <h3>Upcoming bookings</h3>
      {!userData ? (
        <p>No upcoming bookings found.</p>
      ) : (
        <ul>
          {userData.booked.map((booking, index) => (
            <li key={index}>
              {`Date: ${booking.date}, Time: ${booking.time}, Machine: ${booking.machine}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyBookings;
