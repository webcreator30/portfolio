"use client"
import React from 'react'
import styles from '../components/Home.module.css'
import NavBar from './NavBar'
import Image from 'next/image'

const Home = () => {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = 'https://drive.google.com/file/d/1dDGFgXHlahQldhKbZGfSfE2biEff3Qtq/view?usp=sharinghttps://drive.usercontent.google.com/u/0/uc?id=1dDGFgXHlahQldhKbZGfSfE2biEff3Qtq&export=download';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
        <NavBar/>
    <div className={styles.main}>
<div className={styles.left}>
<h1 className={styles.heading} ><span className={styles.digital} >DIGITALIZE</span>  YOUR BUSSINESS <br/> THROUGH WEB </h1>
<p>There are three responses to a piece of design <div class="d-none d-sm-block">
  
</div> yes, no, and WoW ! <span className={styles.digital} >WoW</span> is the one <span className={styles.digital} >we</span> aim for !</p>
      <button className={styles.resumebutton} onClick={handleDownload}  >SEE RESUME</button>
</div>

    </div>
    </div>
  )
}

export default Home
