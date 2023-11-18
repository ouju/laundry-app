// Home.js
import React from 'react';
import ReservationForm from './ReservationForm';

function Home() {

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Here you can book a slot to use the washing machine</p>
      <p>
        Please select available date and starting time below. Each slot is for 1 hour.
      </p>
      <ReservationForm />
    </div>
  );
}

export default Home;
