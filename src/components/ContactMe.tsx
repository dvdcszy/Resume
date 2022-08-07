import React from 'react';
import styles from '../Styles/Contactme.module.css';
import '../Styles/icofont.min.css';
import '../Styles/brands.min.css';

const ContactMeComponent = () => {
  return (
    <div className={styles.mainContainer}>
      <form>
        <input type='text' name='Sender' />
        <textarea name='Message' />
        {/*         <button type='submit' value='Submit'>
          Send
        </button> */}
      </form>
      <div className={styles.contactCard}>
        <h2>
          <i className='icofont-ui-email'></i>
          &emsp; david.csizy@gmail.com
        </h2>
        <h2>
          <a
            href='https://www.linkedin.com/in/david-csizy-7ab5a063/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='icofont-linkedin'></i>
          </a>
          &emsp;
          <a
            href='https://www.linkedin.com/in/david-csizy-7ab5a063/'
            target='_blank'
            rel='noreferrer'
          >
            linkedin.com/in/david-csizy-7ab5a063
          </a>
        </h2>
        <h2>
          <a href='https://github.com/dvdcszy' target='_blank' rel='noreferrer'>
            <i className='fa-brands fa-github'></i>
          </a>
          &emsp;
          <a href='https://github.com/dvdcszy' target='_blank' rel='noreferrer'>
            github.com/dvdcszy
          </a>
        </h2>
      </div>
    </div>
  );
};

export default ContactMeComponent;
