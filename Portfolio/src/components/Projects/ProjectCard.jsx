import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css";
 
export const ProjectCard = (props) => {
    const {title,imageSrc,demo,source,description,skills} = props.project;
  return (
     <div className={styles.container} >
      <img className={styles.image} src={getImageUrl(`${imageSrc}`)} alt={`Image of ${title}`}></img>
      <h3 className={styles.title}>{title}</h3>
     <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
      {skills.map((skill,id)=><li className={styles.skill} key={id}>{skill}</li>
      )}
    </ul>
     <div className={styles.links}>
        <a className={styles.link} target='_blank'  href={demo}>Demo</a>
        <a className={styles.link} target='_blank' href={source}>Source</a>
      </div>
     </div>
    
  )
}
