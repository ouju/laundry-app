// ReservationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ReservationForm.css';

function ReservationForm() {
  const washingMachines = Array.from({ length: 8 }, (_, index) => index + 1);
  const timeSlots = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();
  const today = new Date();

  // Define some disabled time slots to show how already booked slots would look like
  const disabled = [[1, '10am', '23.11.2023'], [2, '9am', '22.11.2023']];
  
  // Calculate the weekdays and dates for the next 7 days
  const upcomingDays = Array.from({ length: 7 }, (_, index) => {
    const nextDay = new Date();
    nextDay.setDate(today.getDate() + index);
    return nextDay;
  });

  // Helper function to check if a slot is disabled
  const isSlotDisabled = (machine, time, date) => {
    return disabled.some(([disabledMachine, disabledTimeSlot, disabledDate]) =>
      machine === disabledMachine && time === disabledTimeSlot && date.toLocaleDateString('fi-FI') === disabledDate
    );
  };

  const handleTimeClick = (slot) => {
    setSelectedSlot(slot);
  };

  // On submit, redirect to the My Bookings page and pass the selected time slot as a parameter
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Reserved ${selectedSlot}`);
    navigate('/my-bookings', { state: { selectedSlot } });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="reservation-form">
      {upcomingDays.map((day, index) => (
        <div key={index}>
          <h2 data-testid="weekday">{weekdays[day.getDay()]} {day.toLocaleDateString('fi-FI')}</h2>
          <table key={index}>
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
                    <td key={machine} data-testid="timeSlot">
                      <button
                        type="button"
                        onClick={() => handleTimeClick(`Machine ${machine} at ${time} on ${weekdays[day.getDay()]} ${day.toLocaleDateString('fi-FI')}`)}
                        className={selectedSlot === `Machine ${machine} at ${time}` ? 'selected' : ''}
                        disabled={isSlotDisabled(machine, time, day)}
                      >
                        {time}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <button type="submit" className="reserveButton">Reserve</button>
    </form>
    // Button to show more time slots can be added at the bottom of the page if needed
  );
}

export default ReservationForm;
