import React from 'react'
import styles from './Contact.module.css';
import Link from 'next/link';
import Iframe from 'react-iframe';
import NavBar from './NavBar';
const Contact = () => {
  return (
    <> <NavBar/>
    <div className={styles.main} >
     
      <div className={styles.left}>
        <h1 className={styles.heading} >Social Links 👉</h1>
        <ul className={styles.social} >
          <li><Link href="https://github.com/30saharsh">Github  👨🏾‍💻</Link></li>
          <li><Link href="https://www.linkedin.com/in/saharsh-shrivastava-71b8b2203/">Linkedin 💼</Link></li>
          <li><Link href="https://www.instagram.com/saharsh_s30?igshid=YTQwZjQ0NmI0OA%3D%3D">Instagram 🫠</Link></li>
          <li><Link href="https://twitter.com/Saharsh30200?t=e5L2AkZOiOWnzWGSZvVYBA&s=08">Twitter 🐤</Link></li>        
        </ul>
      </div>
      <div className={styles.right}>
        <h1 className={styles.heading2}>Connect With Me Here 👉</h1>
      <Iframe 
      title="Google Form"
      url="https://docs.google.com/forms/d/e/1FAIpQLSeFxkhU2B2kZXuGTrC_3UsS3US9x9nHtY9hk5ztk59wommMAQ/viewform?usp=sf_link"
        width="80%"
        height="80%"
        id=""
        className={styles.gform}
        display="block"
        position="relative"/>
      </div>
    </div>
    </>
  )
}

export default Contact
