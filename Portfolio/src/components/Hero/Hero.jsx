import React from 'react'
import styles from "./hero.module.css";
import { getImageUrl } from '../../utils';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
     <section className={styles.container}>
      <div className={styles.content}>
         <h1 className={styles.title}>
           Hi, I'm{' '}
           <span style={{ color: '#64ffda', fontWeight: 600,fontFamily: 'var(--font-roboto)'}}>
             <Typewriter
               words={['Udit', 'a Developer', 'a Designer']}
               loop={true}
               cursor
               cursorStyle="|"
               typeSpeed={80}
               deleteSpeed={50}
               delaySpeed={1500}
             />
           </span>
         </h1>
        <p className={styles.about}>
           I create visually stunning websites and develop efficient<br></br> scalable back-end systems for seamless performance.
        </p>

         <a className={styles.contact} href="mailto:uditkirar02@gmail.com">Contact Me</a>
       </div>
      <img className={styles.img} src={getImageUrl("hero/heroImage1.png")} alt='none'></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
     </section>
  )
}
