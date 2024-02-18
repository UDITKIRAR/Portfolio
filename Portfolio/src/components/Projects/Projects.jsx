import React from 'react'
import projects from "../../data/projects.json"
import { getImageUrl } from '../../utils';
import styles from "./Project.module.css"
import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
     <h2 className={styles.title}>Projects</h2>
     <div className={styles.projects}>
       {
        projects.map((project,id)=><ProjectCard key={id} project={project}></ProjectCard>
        )
       }
     </div>
    
    </section>
  )
}
