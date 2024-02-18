import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./contact.module.css";
export const Contact = () => {
  return (
    <footer id='contact' className={styles.foot} >
        <div className={styles.text}>
            <h1>Contact</h1>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <img  src={getImageUrl("contact/emailIcon.png")} alt='mail me'></img>
            <a target='_blank' href='mailto:uditkirar02@gmail.com'>uditkirar02@gmail.com</a>
            </li>
            <li className={styles.link}>
            <img  src={getImageUrl("contact/githubIcon.png")} alt='github'></img>
            <a target='_blank' href=' https://github.com/UDITKIRAR'>github/Udit</a>
            </li>
            <li className={styles.link}>
            <img  src={getImageUrl("contact/linkedinIcon.png")} alt='contact'></img>
            <a target='_blank' href='https://www.linkedin.com/in/udit-kirar-51a425222/'>linkedin.com/Udit</a>
            </li>
        </ul>
        </footer>
  )
}
