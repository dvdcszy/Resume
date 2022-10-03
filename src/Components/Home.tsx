import React from 'react';
import styles from '../Styles/Home.module.css';
import '../Styles/icofont.min.css';
import '../Styles/brands.min.css';

const HomeComponent = () => {
  return (
    <div className='container is-flex is-flex-direction-column'>
      <h3 className='title is-3 is-size-5-touch'>HELLO, I&apos;M</h3>
      <h1 className='title is-1 is-size-2-touch'>DAVID CSIZY</h1>
      <p className='subtitle is-5 is-size-6-touch is-primary'>
        Experienced supply chain analyst with enthusiasm <br />
        for digital and automated solutions.
      </p>
      <section className='section is-flex is-justify-content-center'>
        <span className={styles.social}>
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
  );
};

export default HomeComponent;
