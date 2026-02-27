import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <a className="back-to-top" href="#hero">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
        <span>Back to Top</span>
      </a>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Raychelle Kalekye. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
