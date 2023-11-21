// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-bookings">My Bookings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
