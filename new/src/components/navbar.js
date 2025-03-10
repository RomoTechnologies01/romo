import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

 function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;