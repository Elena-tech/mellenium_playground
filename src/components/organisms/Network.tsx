import React from "react";
import styles from "../../styles/organisms/Network.module.css";

const Network: React.FC = () => {
  return (
    <section className={styles.networkSection}>
      <div className={styles.overlay}>
        <h2>A network of entrepreneurial minds</h2>
        <p>We seek to empower our global network to deliver on our mission.</p>
        <button className={styles.ctaButton}>Meet our people</button>
      </div>
    </section>
  );
};

export default Network;
