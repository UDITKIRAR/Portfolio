import styles from './App.module.css';
import { getImageUrl } from './utils';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/contact';

function App() {
   const img = getImageUrl('projects/project.png')
  return (
    <>
    <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
    </div>
    </>
  )
}

export default App
