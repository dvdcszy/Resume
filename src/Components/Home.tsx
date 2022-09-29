import React from 'react';
import styles from '../Styles/Home.module.css';
import '../Styles/icofont.min.css';
import '../Styles/brands.min.css';
/* import circuit from '../circuit.svg';
import HomeCircuitSvgComponent from './HomeCircuitSvg'; */

const HomeComponent = () => {
  return (
    <>
      <section className={styles.mainContent}>
        {/*         <div className={styles.imageContainer}>
          <HomeCircuitSvgComponent />
        </div> */}
        <div className={styles.textContainer}>
          <h3 className={styles.welcome}>HELLO, I&apos;M</h3>
          <h2 className={styles.name}>DAVID CSIZY</h2>
          <h4 className={styles.summary}>
            Experienced supply chain analyst
            <br />
            with enthusiasm for digital and automated solutions.
          </h4>
          <section className={styles.social}>
            <span>
              <a
                href='https://www.linkedin.com/in/david-csizy-7ab5a063/'
                target='_blank'
                rel='noreferrer'
                className='icofont-linkedin'
              ></a>
              <a
                href='http://m.me/david.csizy'
                target='_blank'
                rel='noreferrer'
                className='icofont-facebook-messenger'
              ></a>
              <a
                href='https://github.com/dvdcszy'
                target='_blank'
                rel='noreferrer'
                className='fa-brands fa-github'
              ></a>
            </span>
          </section>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
