import React from 'react';
import Link from 'gatsby-link';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="container has-text-centered">
      <h2 className="subtitle">
        {' '}
        Fallow us on:
        <a href="https://www.instagram.com/getweeat/">
          <FaInstagram
            size={30}
            style={{ marginLeft: '10px', verticalAlign: 'middle' }}
          />
        </a>
        <a href="https://www.facebook.com/getweeat/">
          <FaFacebookSquare
            size={30}
            style={{ marginLeft: '10px', verticalAlign: 'middle' }}
          />
        </a>
        <a href="https://twitter.com/getweeat">
          <FaTwitter
            size={30}
            style={{ marginLeft: '10px', verticalAlign: 'middle' }}
          />
        </a>
      </h2>
      <p>
        <Link to="/privacy/">Privacy Policy</Link>
        {' • '}
        <Link to="/terms/">Terms of Use</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
