// Application footer displaying copyright, system status, and links
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CampusIQ Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
