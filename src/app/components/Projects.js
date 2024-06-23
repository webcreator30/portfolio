import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import NavBar from './NavBar'
import Link from "next/navigation";

const Projects = () => {
  return (
    <>
    <NavBar/>
      <div className={styles.main}>
      <div className={styles.container}>
 <div className={styles.wrapper}>
   <div className={styles.banner_image2}> </div>
   <h1>SpeedoMass.in <br /> ( MERN STACK )</h1>
   <p>A Full Stack Company Website, <br/>
     Providing Various IT Services</p>
  </div>
  <div className={styles.button_wrapper}> 
 <a href="https://www.speedomass.in/"> <button className={styles.btn}>VIEW</button></a>
  </div>
    </div>
    <div className={styles.container}>
 <div className={styles.wrapper}>
   <div className={styles.banner_image1}> </div>
   <h1>Graphical Expense Tracker <br /> ( REACTJS , NEXTJS ) </h1>
   <p>A user-friendly expense tracking solution ,<br/>
   monitor daily expenses through an auto adjusting time-based graph</p>
  </div>
  <div className={styles.button_wrapper}> 
  <a href="https://expense-tracker-using-react-pi.vercel.app/"><button className={styles.btn}>VIEW</button></a>
  </div>
    </div>
  
    <div className={styles.container}>
 <div className={styles.wrapper}>
   <div className={styles.banner_image}> </div>
   <h1>Collaborative Whiteboard <br /> ( MERN Stack )</h1>
   <p>Seamlessly enables multi-user drawing with Socket.IO<br/>
      ensuring real-time updates</p>
  </div>
  <div className={styles.button_wrapper}> 
  <button className={styles.btn}>VIEW</button>
  </div>
    </div>
    <div className={styles.container}>
 <div className={styles.wrapper}>
   <div className={styles.banner_image3}> </div>
   <h1>APP DEV Agency WEBSITE <br /> ( UI UX ) </h1>
   <p>An attractive App development company <br/>
     website with animations .</p>
  </div>
  <div className={styles.button_wrapper}> 
  <a href="https://30saharsh.github.io/App_Dev_Website/"><button className={styles.btn}>View</button></a>
  </div>
    </div>
    <div className={styles.container}>
 <div className={styles.wrapper}>
   <div className={styles.banner_image4}> </div>
   <h1>Online Inusrance Claim Portal <br />( UI UX )</h1>
   <p>A UI UX Design of an Online <br/>
     Insurance claim PORTal named "S6"</p>
  </div>
  <div className={styles.button_wrapper}> 
 <a href="https://30saharsh.github.io/Insurance_Claim_Company_Website/"> <button className={styles.btn}>View</button></a>
  </div>
    </div>
    <div className={styles.container}>
 <div className={styles.wrapper}>
   <div className={styles.banner_image5}> </div>
   <h1>Quirarbox <br /> ( UI UX ) </h1>
   <p>A UI UX Design of an courier,<br/>
     service providing firm .</p>
  </div>
  <div className={styles.button_wrapper}> 
  <button className={styles.btn}>VIEW</button>
  </div>
    </div>
</div>
    </>
  );
};

export default Projects;
