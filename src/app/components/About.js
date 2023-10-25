import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'


const About = () => {
  return (
    <div>
<div className={styles.main}>
    <div className={styles.left}>
   <h1>Saharsh Shrivastava</h1>
   <h2 className={styles.headingtwo} >MERN Stack Developer</h2>
<h2>Fresh Full Stack Developer adept at data flow management, passionate about learning and thriving in the corporate tech landscape.</h2>
<p>Currently I am pursuing my Bachelor's Degree in Computer Science from Lakshmi Narain College of Technology and Science Bhopal (  Final year ) .</p>
<p>I Have Worked as a Front-End Developer for Team
"Imaginers" in a state level hackathon held at
Bansal Group of Colleges Bhopal (MP) and
were the category winners for finance and
insurance category</p>
<h3>Interests - </h3>
<h4>1. Thinking Business Solutions Using my Skill Set</h4>
<h4>2. Technical Research</h4>
<h4>3. Explore New Technologies</h4>
<h4>4. Developing Real World Solutions</h4>
<p>I Have worked on many real world projects including various libraries , various user-interfaces and that's what motivate me to work more in this field , Connect with me for Collaborative Projects , Freelnace Projects.</p>
    </div>
    <div className={styles.right}>
        <Image
        src="/college.jpg"
        width={500}
        height={500}
        className={styles.clgpic}
        />

    </div>
</div>
    </div>
  )
}

export default About
