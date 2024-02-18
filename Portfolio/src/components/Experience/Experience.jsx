import React from 'react'
import skills from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import history from "../../data/history.json";
import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section className={styles.container}  id='experience'>
     <h2 className={styles.title}>Experience</h2>
     <div className={styles.content}>
        <div className={styles.skills}>
        {
         skills.map((skill,id)=>{
            return <div className={styles.skill} key={id}>
            <div  className={styles.imgcontainer}>
                <img  src={getImageUrl(skill.imageSrc)} alt={skill.title}></img>
            </div>
            <p>{skill.title}</p>
            </div>
         })
        }
        </div>
        <ul className={styles.history}>
            {
                history.map((historys,id)=>{
                    return <li className={styles.historyitem} key={id}>
                     <img className={styles.com} src={getImageUrl(historys.imageSrc)} alt={`${historys.organisation} Logo`}></img>  
                    <div className={styles.historyitemdetail}>
                     <h3>{`${historys.role}-Internship, ${historys.organisation}`} <a href=''><img height="25px" width="25px" src={getImageUrl("about/serverIcon.png")}></img></a></h3>
                     <p>{`${historys.startDate} - ${historys.endDate}`}</p>
                      
                    <ul>
                        {historys.experiences.map((exp,id)=>{
                         return <li key={id}>
                              {exp} 
                            </li> 
                         })}
                    </ul>
                    </div> 
                    </li>
                })

            }
        </ul>
     </div>
    </section>
  )
};
