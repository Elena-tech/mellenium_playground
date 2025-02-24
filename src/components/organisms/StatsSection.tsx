import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";
import styles from "../../styles/organisms/StatsSection.module.css";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix = "+", label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  if (inView) {
    controls.start("visible");
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className={styles.statItem}
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
    >
      <span className={styles.value}>
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : "0"}
      </span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className={styles.statsSection}>
      <motion.p
        className={styles.intro}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Millennium is a global, diversified alternative investment firm with the
        mission to deliver high-quality returns for our investors.
      </motion.p>

      <motion.div
        className={styles.statsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <StatItem value={35} label="YEARS OF EVOLUTION" />
        <StatItem value={76} suffix="BN+" label="AUM" />
        <StatItem value={6100} label="EMPLOYEES GLOBALLY" />
        <StatItem value={140} label="EMPLOYEE LOCATIONS" />
        <StatItem value={330} label="INVESTMENT TEAMS" />
      </motion.div>
    </section>
  );
};

export default Stats;
