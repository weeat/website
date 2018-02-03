import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer className="footer">
    <div className="container has-text-centered">
      <p>
        <Link to="/privacy/">Privacy Policy</Link>
        {' • '}
        <Link to="/terms/">Terms of Use</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
