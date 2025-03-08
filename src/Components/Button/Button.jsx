import React from 'react'
import { MdMessage } from "react-icons/md"
import styles from './Button.module.css'
const Button = ({text,icon, bigBtn}) => {
  return (
    <div className={styles.blackBtn}>
        <button className={bigBtn==true ?styles.bigbtn :styles.smlbtn}>
          {icon}
          {text}

        </button>
    </div>
  );
};

export default Button