import React from 'react';
import styles from '../Styles/Home.module.css';
import '../Styles/icofont.min.css';
import '../Styles/brands.min.css';

const HomeComponent = () => {
  return (
    <div className='container is-align-items-center is-justify-content-center'>
      <h3 className='title is-3 is-size-5-touch'>HELLO, I&apos;M</h3>
      <p className='title is-1 is-size-2-touch'>DAVID CSIZY</p>
      <h4 className='subtitle is-3 is-size-5-touch'>
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
  );
};

export default HomeComponent;
