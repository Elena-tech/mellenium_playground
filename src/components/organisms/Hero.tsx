import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import styles from "../../styles/organisms/Hero.module.css";

const Hero: React.FC = () => {
  const controls = useAnimation();
  // buttonState: 0 = circle, 1 = rectangle, 2 = hidden
  const [buttonState, setButtonState] = useState<number>(0);

  // Start the entrance animation when the component mounts
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Scroll handler to update button state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setButtonState(0); // circle
      } else if (scrollY >= 100 && scrollY < 300) {
        setButtonState(1); // rectangle with text
      } else {
        setButtonState(2); // hidden
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for staggering hero text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Variants for each text element
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Variants for the explore button
  const buttonVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1 className={styles.heroTitle} variants={textVariants}>
          Built for an ever-changing world
        </motion.h1>
        <motion.p className={styles.heroSubtitle} variants={textVariants}>
          Defined by evolution, innovation and focus since 1989.
        </motion.p>
      </motion.div>

      <AnimatePresence>
        {buttonState !== 2 && (
          <motion.button
            key={buttonState}
            className={`${styles.exploreBtn} ${
              buttonState === 1 ? styles.rectangle : styles.circle
            }`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {buttonState === 0 ? (
              // Circle version: just arrow icon
              <span className={styles.arrowIcon} />
            ) : (
              // Rectangle version: text and arrow icon
              <>
                Explore what's possible <span className={styles.arrowIcon} />
              </>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
