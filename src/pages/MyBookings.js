// MyBookings.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import bookingsData from '../data/bookings.json';

function MyBookings() {
  const location = useLocation();
  const selectedSlot = location.state?.selectedSlot;
  const userId = "1010"; // Current user's ID
  const userData = bookingsData[userId];

  if (!userData) {
    return (
      <div>
        <h2>My Bookings</h2>
        <p>No bookings found for user ID: {userId}</p>
      </div>
    );
  }

  const { booked } = userData;

  return (
    <div>
      <h2>My Bookings</h2>
      {selectedSlot && <p>Time Slot successfully reserved: {selectedSlot}</p>}
      <h3>Upcoming time slots</h3>
      <ul>
        {booked.map((booking, index) => (
          <li key={index}>
            {`Date: ${booking.date}, Time: ${booking.time}, Machine: ${booking.machine}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyBookings;
