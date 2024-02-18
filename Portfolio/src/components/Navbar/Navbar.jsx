import React,{useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';
export const Navbar = () => {
    const [menu,setmenu]=useState(false);
  return (
    <nav className={styles.navbar}>
    <a className={styles.title}  href='/'>UditKirar</a>
    <div className={styles.menu}>
        <img className={styles.menubtn} src={menu==false?getImageUrl("nav/menuIcon.png"):getImageUrl("nav/closeIcon.png")} alt='none'
          onClick={()=>{
            menu?setmenu(false):setmenu(true)
          }}></img>
       <ul className={`${styles.menuitems} ${menu && styles.menuopen} `} onClick={()=>{
         setmenu(!menu);
       }}>
        <li className={styles.point}><a href='#about'>About</a></li>
        <li className={styles.point}><a href='#experience'>Experience</a></li>
        <li className={styles.point}><a href='#projects'>Projects</a></li>
        {/* <li className={styles.point}><a href='#contact'>Contact</a></li> */}
        <li className={styles.point}><a href='' download>Resume</a></li>
       </ul> 
    </div>
    </nav>
  )
};
