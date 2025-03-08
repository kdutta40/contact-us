import React from 'react'
import styles from './FormPart.module.css'
import Button from '../Button/Button.jsx'
import { MdMessage } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
const FormPart = () => {
  return (
  <section className={styles.page}>
    <div className={styles.container}>
      <div className={styles.blackBtn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="15px"/>}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="15px"/>}/>
      </div>
      <Button text="VIA EMAIL FORM" icon={<MdMessage fontSize="15px"/>} bigBtn={true}/>
      <form>
        <div className={styles.input}>
          <label htmlForfor="name">Name</label>
          <input type="text" name='name'/>
        </div>
        <div className={styles.input}>
          <label htmlForfor="email">E-Mail</label>
          <input type="text" name='email'/>
        </div>
        <div className={styles.input}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows={8}></textarea>
        </div>
        <div className={styles.frmBtn}>
          <Button text="Submit"/>
        </div>
        

        
      </form>
      
    </div>
    <img src="/public/images/support.svg" alt="support image" />            
  </section>
    
  );
};

export default FormPart