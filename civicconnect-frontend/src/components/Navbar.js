// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1>CivicConnect</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/report-issue">Report Issue</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
