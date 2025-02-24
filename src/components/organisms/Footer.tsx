import React from "react";
import styles from "../../styles/organisms/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section: Grid of links */}
      <div className={styles.linkGrid}>
        {/* 1. Approach */}
        <div>
          <h4>Approach</h4>
        </div>

        {/* 2. People + sub-links */}
        <div>
          <h4>People</h4>
          <ul>
            <li>Leadership</li>
            <li>Investment Professionals</li>
            <li>Technology</li>
            <li>Core Infrastructure</li>
          </ul>
        </div>

        {/* 3. Careers + sub-links */}
        <div>
          <h4>Careers</h4>
          <ul>
            <li>Life at Millennium</li>
            <li>Students</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* 4. Global Presence */}
        <div>
          <h4>Global Presence</h4>
        </div>

        {/* 5. Investor Login */}
        <div>
          <h4>Investor Login</h4>
        </div>

        {/* 6. Right column: Terms, Privacy, Disclosures, Media Inquiries, Social Icons */}
        <div className={styles.rightLinks}>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Disclosures</li>
            <li>Media Inquiries</li>
          </ul>
          <div className={styles.socialIcons}>
            {/* Replace with actual icons/links as needed */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Large brand name + copyright */}
      <div className={styles.brandRow}>
        <div className={styles.brand}>millennium</div>
        <div className={styles.copy}>© 2025 Millennium Management LLC</div>
      </div>
    </footer>
  );
};

export default Footer;
