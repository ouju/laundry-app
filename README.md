# Laundry App

An app for booking washing machines. In the home page, available time slots are shown for the following seven days. Currently, some disabled time slots are defined in src/components/ReservationForm.js to show how already booked slots would look like in the Reservation Form. You can edit these slots when needed.

In My Bookings page you can see the booked time slots for a specified user. Currently, a demo user ID is hardcoded directly in src/pages/MyBookings.js for testing purposes. Using that ID, we search for the booked slots from the json (src/data/bookings.json), where the bookings are saved (currently manually). Booking a washing machine on the home page, takes user to the My Bookings page and displays the details of the booked slot.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Known deficiencies or bugs

- You can click 'Reserve' without selecting any time slot.
- Clicking a disabled time slot removes the focus from the previously selected slot, but it remains selected. This means that if the user clicks 'Reserve', the previously selected slot will be reserved.