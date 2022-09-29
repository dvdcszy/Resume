import React from 'react';
import styles from '../Styles/About.module.css';
import portrait from '../Images/IMG_0078.jpg';
import careerPathImg from '../Images/career_timeline.png';

const AboutComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.intro}>
        {/*         <h2>ABOUT ME</h2> */}
        <p className={styles.summaryTextP}>
          <img className={styles.dot} src={portrait} alt='Image of me' />
          <span className={styles.summaryTextSpan}>
            Experienced supply chain analyst with a demonstrated history of
            working in the electrical and electronic manufacturing industry.
            Strong operations professional with enthusiasm for digital and
            automated solutions as a certified Microsoft Azure developer.
          </span>
        </p>
      </div>
      <div className={styles.experiences}>
        <div>
          <h2>EDUCATION AND EXPERIENCES</h2>
        </div>
        {/*         <div>
          <h2>EDUCATION</h2>
          <h2>EXPERIENCE</h2>
        </div> */}
        <img src={careerPathImg} alt='Career timeline' />
      </div>
    </div>
  );
};

export default AboutComponent;
