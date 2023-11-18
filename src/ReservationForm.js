// ReservationForm.js
import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const washingMachines = Array.from({ length: 8 }, (_, index) => index + 1);
  const timeSlots = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [selectedSlot, setSelectedSlot] = useState(null);
  const today = new Date();
  const date = today.toLocaleDateString('fi-FI');
  const weekday = weekdays[today.getDay()];

  const handleTimeClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Reserved ${selectedSlot}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{weekday} {date}</h2>
      <table>
        <thead>
          <tr>
            {washingMachines.map((machine) => (
              <th key={machine}>Machine {machine}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time) => (
            <tr key={time}>
              {washingMachines.map((machine) => (
                <td key={machine}>
                  <button
                    type="button"
                    onClick={() => handleTimeClick(`Machine ${machine} at ${time} on ${weekday} ${date}`)}
                    className={selectedSlot === `Machine ${machine} at ${time}` ? 'selected' : ''}
                  >
                    {time}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
