import React from 'react';
import styles from './ContactHeader.module.css';

export const ContactHeader = () => {
  return (
    <div className=''>
        <h1 className={styles.header}>CONTACT US</h1>
        <p className={styles.para}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    </div>
  );
};
export default ContactHeader