import React from 'react';
import styles from '../Styles/Skillsandtechs.module.css';
import skillBarsImg from '../Images/skillbars.png';
import languageCirclesImg from '../Images/language_donut.png';
import techsImg from '../Images/techs.png';

const SkillsAndTechComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h2>PROCESS EXPERIENCE</h2>
        <h4>100% = 10 years</h4>
      </div>
      <img src={skillBarsImg} alt='Bars with my process experiences' />
      <h2>LANGUAGES</h2>
      <img src={languageCirclesImg} alt='Donuts with my language knowledges' />
      <h2>TECHS & FRAMEWORKS</h2>
      <img src={techsImg} alt='Logos of technologies I work with' />
    </div>
  );
};

export default SkillsAndTechComponent;
