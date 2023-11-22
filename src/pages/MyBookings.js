// MyBookings.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function MyBookings() {
  const location = useLocation();
  const selectedSlot = location.state?.selectedSlot;

  return (
    <div>
      <h2>My Bookings</h2>
      {selectedSlot && <p>Time Slot successfully reserved: {selectedSlot}</p>}
      <h3>Upcoming time slots</h3>
    </div>
  );
}

export default MyBookings;
