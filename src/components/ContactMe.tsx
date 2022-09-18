import React, { useState } from 'react';
import styles from '../Styles/Contactme.module.css';
import '../Styles/icofont.min.css';
import '../Styles/brands.min.css';
import emailjs from '@emailjs/browser';

const ContactMeComponent = () => {
  interface SubmittedForm {
    isMessageSent: boolean;
  }
  const [submittedForm, setIsMessageSent] = useState<SubmittedForm>({
    isMessageSent: false,
  });
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_syy18xq',
        'template_c8p5sce',
        e.currentTarget,
        'uDytv20x8CsKfGK0k',
      )
      .then(
        (result: { text: string }) => {
          console.log(result.text);
        },
        (error: { text: string }) => {
          console.log(error.text);
        },
      );
    e.currentTarget.reset();
    setIsMessageSent({ isMessageSent: true });
  };
  return (
    <div className={styles.mainContainer}>
      {submittedForm.isMessageSent ? (
        <h4 className={styles.thanks}>
          Thank you, I will get back to You ASAP!
        </h4>
      ) : (
        <form onSubmit={sendEmail}>
          <input type='text' name='from_name' />
          <textarea name='message' />
          <input className={styles.submitBtn} type='submit' value='Send' />
        </form>
      )}
      <div className={styles.contactCard}>
        <div className={styles.row}>
          <div className={styles.icon}>
            <i className='icofont-ui-email'></i>
          </div>
          <div className={styles.text}>
            <span>david.csizy@gmail.com</span>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.icon}>
            <a
              href='https://www.linkedin.com/in/david-csizy-7ab5a063/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='icofont-linkedin'></i>
            </a>
          </div>
          <div className={styles.text}>
            <a
              href='https://www.linkedin.com/in/david-csizy-7ab5a063/'
              target='_blank'
              rel='noreferrer'
            >
              linkedin.com/in/david-csizy-7ab5a063
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.icon}>
            <a
              href='https://github.com/dvdcszy'
              target='_blank'
              rel='noreferrer'
            >
              <span className='fa-brands fa-github'></span>
            </a>
          </div>
          <div className={styles.text}>
            <a
              className={styles.linkText}
              href='https://github.com/dvdcszy'
              target='_blank'
              rel='noreferrer'
            >
              <span>github.com/dvdcszy</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeComponent;
