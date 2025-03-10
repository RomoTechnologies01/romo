import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Web Design Startup. All rights reserved.</p>
    </footer>
  );
}

export default Footer;