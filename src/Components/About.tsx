import React from 'react';
import styles from '../Styles/About.module.css';
import portrait from '../Images/IMG_0078.jpg';
import careerPathImg from '../Images/career_timeline.png';

const AboutComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.intro}>
        <figure className='image is-128x128 mr-6'>
          <img
            className={styles.portraitImage}
            src={portrait}
            alt='Image of me'
          />
        </figure>
        <p className={styles.summaryTextP}>
          <span className={styles.summaryTextSpan}>
            Experienced supply chain analyst with a demonstrated history of
            working in the electrical and electronic manufacturing industry.
            Strong operations professional with enthusiasm for digital and
            automated solutions as a certified Microsoft Azure developer.
          </span>
        </p>
      </div>
      <div className={styles.experiences}>
        <h2>EDUCATION AND EXPERIENCES</h2>
        <img src={careerPathImg} alt='Career timeline' />
      </div>
    </div>
  );
};

export default AboutComponent;
