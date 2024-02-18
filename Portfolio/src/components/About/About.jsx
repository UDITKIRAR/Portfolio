import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
export const About = () => {
  return (
     <section className={styles.sec} id="about">
      <h3 className={styles.head}>ABOUT</h3>
      
      <div className={styles.cont} >
        <img className={styles.img} src={getImageUrl("about/aboutImage1.jpg")}></img>
        <div className={styles.mine}>
        <div className={styles.f}>
        <p>I'm a web developer located in India. I enjoy designing user-friendly websites that are straightforward yet stunning.</p>
        </div>
        <div className={styles.f}>
        <p>The entire full stack is what interests me. like attempting novel ideas and creating outstanding projects. I'm a self-employed freelancer who enjoys reading.</p>
        </div>
        <div className={styles.f}>
        <p>Everything, in my opinion, becomes art when you apply consciousness to it. You may reach me on social media.</p> 
        </div>
        </div>
        </div>
     </section>
  )
}
