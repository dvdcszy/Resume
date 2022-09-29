import React from 'react';
import styles from '../Styles/HomeCircuitSvg.module.css';

const HomeCircuitSvgComponent = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 183 245'>
      <defs></defs>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='mainText'>
          <g id='circuit'>
            <line className={styles.cls1} x1='2' x2='2' y2='131' />
            <line className={styles.cls2} y1='131' x2='159' y2='131' />
            <circle className={styles.cls1} cx='170' cy='131' r='11' />
            <circle className={styles.cls1} cx='170' cy='232' r='11' />
            <polyline className={styles.cls1} points='159 232 78 232 78 131' />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HomeCircuitSvgComponent;
