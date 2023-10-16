import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container fcontainer">
        <p>&copy; {new Date().getFullYear()} R Systems International</p>
      </div>
    </footer>
  );
}

export default Footer;
