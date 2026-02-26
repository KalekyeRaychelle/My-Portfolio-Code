import React from 'react';
import styles from '../styles/Header.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.brand}>
        R.K.
      </a>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
