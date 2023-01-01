import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <div className="navbar">
      <div className="scrollmenu">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="restaurants/1"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Restaurants
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
