import React, { useState } from "react";
import styles from "../../styles/molecules/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>millennium</div>

      {/* Desktop Nav */}
      <nav className={styles.desktopNav}>
        <ul>
          <li>Approach</li>
          <li>People</li>
          <li>Careers</li>
          <li>Global Presence</li>
          <li>Investor Login</li>
        </ul>
      </nav>

      {/* Hamburger: 2 lines */}
      <button className={styles.hamburger} onClick={openMobileMenu}>
        <span />
        <span />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeButton} onClick={closeMobileMenu}>
            &times;
          </button>
          <ul>
            <li>Approach /</li>
            <li>People /</li>
            <li>Careers /</li>
            <li>Global Presence</li>
            <li className={styles.investorLink}>Investor Login</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
