import React from 'react';
import Link from 'gatsby-link';

import FacebookIcon from 'react-icons/lib/fa/facebook-official';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import TwitterIcon from 'react-icons/lib/fa/twitter';

const Footer = () => (
  <footer className="footer">
    <div className="container has-text-centered">
      <h2 className="subtitle">
        {' '}
        Fallow us on:
        <a href="https://www.instagram.com/getweeat/">
          <InstagramIcon size={30} style={{ marginLeft: '10px' }} />
        </a>
        <a href="https://www.facebook.com/getweeat/">
          <FacebookIcon size={30} style={{ marginLeft: '10px' }} />
        </a>
        <a href="https://twitter.com/getweeat">
          <TwitterIcon size={30} style={{ marginLeft: '10px' }} />
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
