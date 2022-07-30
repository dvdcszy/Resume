import React from 'react';
import styles from '../Styles/About.module.css';
import portrait from '../Images/IMG_0078.jpg';
import dateMap from '../Images/circuit_w_dates.svg';

const AboutComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.intro}>
        <h2>ABOUT ME</h2>
        <p className={styles.summaryText}>
          <img className={styles.dot} src={portrait} alt='Image of me' />
          <span className={styles.summaryText}>
            Lorem Lorem ipsum dolor sit amet, constetuer adipiscing elit, sed
            diam nonummy nibh Lorem ipsum dolor sit amet, consec
          </span>
        </p>
      </div>
      <div className={styles.experiences}>
        <div>
          <h2>EDUCATION</h2>
          <h2>EXPERIENCE</h2>
        </div>
        <img src={dateMap} alt='Image of periods in my career' />
      </div>
    </div>
  );
};

export default AboutComponent;
