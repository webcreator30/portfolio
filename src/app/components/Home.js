import React from 'react'
import styles from '../components/Home.module.css'
import NavBar from './NavBar'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
        <NavBar/>
    <div className={styles.main}>
<div className={styles.left}>
<h1 className={styles.heading} >Hey!! , Let's Digitalize Your Bussiness Through Web </h1>
        <h1>Myself <span className={styles.name} >Saharsh</span> a Passionate Full Stack Developer !(MERN)</h1>
        <a className={styles.resumea}  href="https://drive.google.com/file/d/1fgkl45Bf7j1oqaJg8NrSfp0inl7W7U3E/view?usp=drive_link"><button className={styles.resumebutton} >Resume</button></a>
</div>
<div className={styles.right}>
<Image
className={styles.developer}
src="/my.jpg"
width={320}
height={400}


/>




</div>
    </div>
    </div>
  )
}

export default Home
