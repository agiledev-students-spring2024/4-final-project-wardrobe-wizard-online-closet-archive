import React from 'react';
import './Footer.css'; // make sure to create a Footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Wardrobe Wizard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
