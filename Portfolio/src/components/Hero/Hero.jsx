import React from 'react'
import styles from "./hero.module.css";
import { getImageUrl } from '../../utils';
export const Hero = () => {
  return (
     <section className={styles.container}>
      <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm Udit</h1>
         <p className={styles.about}>I design and Code simple yet beautiful websites.</p>
         <a className={styles.contact} href="mailto:uditkirar02@gmail.com">Contact Me</a>
      </div>
      <img className={styles.img} src={getImageUrl("hero/heroImage1.png")} alt='none'></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
     </section>
  )
}
