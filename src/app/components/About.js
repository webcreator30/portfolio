import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import NavBar from './NavBar'


const About = () => {
  return (
    <>
    <NavBar/>
    <div className={styles.main}>
      <div className={styles.up}>
        <div className={styles.uptop}>
          <h2>WHAT I DO</h2>
        </div>
        <div className={styles.updown}>
          <div className={styles.card}>
            <div className={styles.cardleft}>
              <img src="/next.png" alt="" />
            </div>
            <div className={styles.cardright}>
              <h3>Responsive Mobile</h3>
              <p>Lavish CSS Template is designed by templatemo . Download , edit and use this layout</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardleft}>
              <img src="/next.png" alt="" />
            </div>
            <div className={styles.cardright}>
              <h3>Responsive Mobile</h3>
              <p>Lavish CSS Template is designed by templatemo . Download , edit and use this layout</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardleft}>
              <img src="/next.png" alt="" />
            </div>
            <div className={styles.cardright}>
              <h3>Responsive Mobile</h3>
              <p> by templatemo . Download , edit and use this layout</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>ABOUT SAHARSH</h2>
        <h3>Full Stack Web Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus earum ipsa perferendis <br /> adipisicing elit. Dolore sunt veritatis eos.</p>
        <p>t consectetur adipisicing elit. Earum omnis iure asperiore Lorem ipsum dolor sit amet consectetur asda asa<br /> necessitatibus laboriosam mollitia!</p>
      </div>
    </div>
    </>
  )
}

export default About
