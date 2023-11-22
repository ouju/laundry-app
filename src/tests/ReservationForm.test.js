// ReservationForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';

describe('ReservationForm component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ReservationForm />
      </BrowserRouter>
    );
  });

  test('renders ReservationForm component', () => {

    // Check if the component renders without crashing
    expect(screen.getByTestId('reservation-form')).toBeInTheDocument();

    // Check if the form has the correct structure
    expect(screen.getAllByTestId('weekday')).toHaveLength(7); // 7 days are shown at once
    expect(screen.getAllByTestId('timeSlot')).toHaveLength(448); // 8 machines * 8 time slots * 7 days + 1 Reserve button
    expect(screen.getByText('Reserve')).toBeInTheDocument(); // 1 Reserve button
  });
});
