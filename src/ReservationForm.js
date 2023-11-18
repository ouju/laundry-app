// ReservationForm.js
import React from 'react';

function ReservationForm() {
  const washingMachines = Array.from({ length: 8 }, (_, index) => index + 1);
  const timeSlots = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'];

  const handleSubmit = () => {
    console.log('Reserved for the following time slots:');
  };

  return (
    <form onSubmit={handleSubmit}>
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
                <td key={machine}>{time}</td>
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
