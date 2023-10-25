import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.up}>
            <Image
              src="/chart-data-visualizer.jpg"
              className={styles.dashboard}
              width={280}
              height={190}
            />
          </div>
          <div className={styles.down}>
            <h3 className={styles.cardheading}>
              Visulization Dashboard using Charts
            </h3>
            <p>
              A Visualization Dashboard App using React.js, Next.js, Node.js,
              and MongoDB. Leverage visualization libraries for interactive Bar,
              Area, and Line Charts.
            </p>
            <button className={styles.github} >
              <a className={styles.githuba}  target="_blank"  href="https://docs.google.com/document/d/1F6iMSnm_lXLbC5BcKpay_riudQHiGHmS95Fa6p2ccdg/edit?usp=sharing">Github</a>
            </button>
            <button  className={styles.live}  >
              {" "}
              <a  className={styles.livea} href="#">Live</a>{" "}
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.up}>
            <Image
              src="/expense_tracker.jpg"
              className={styles.dashboard}
              width={280}
              height={190}
            />
          </div>
          <div className={styles.down}>
            <h3 className={styles.cardheading}>
             Time Based Expense Tracker
            </h3>
            <p>
            Built a user-friendly expense tracking solution using Next.js and
React.js. Seamlessly monitor daily expenses through an autoadjusting time-based graphical representation.
            </p>
            <button className={styles.github} >
              <a className={styles.githuba}  href="https://github.com/30saharsh/Expense-Tracker-Using-React.git">Github</a>
            </button>
            <button  className={styles.live}  >
              {" "}
              <a  className={styles.livea} target="_blank" href="https://expense-tracker-using-react-pi.vercel.app/">Live</a>{" "}
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.up}>
            <Image
              src="/realtime-whiteboard.jpg"
              className={styles.dashboard}
              width={280}
              height={190}
            />
          </div>
          <div className={styles.down}>
            <h3 className={styles.cardheading}>
            Realtime Collaborative Whiteboard
            </h3>
            <p>
            Real-time whiteboard app using Next.js and React.js on the front
end, Node.js backend. Seamlessly enables multi-user drawing on
a shared canvas with Socket.IO, ensuring real-time updates.
            </p>
            <button className={styles.github} >
              <a className={styles.githuba}  href="https://github.com/30saharsh/Realtime_Whiteboard_Using_React.git">Github</a>
            </button>
            <button  className={styles.live}  >
              {" "}
              <a  className={styles.livea} href="#">Live</a>{" "}
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.up}>
            <Image
              src="/portfolio.jpg"
              className={styles.dashboard}
              width={280}
              height={190}
            />
          </div>
          <div className={styles.down}>
            <h3 className={styles.cardheading}>
              Personal Portfolio Website using ReactJS/Next.js
            </h3>
            <p>
          A Personalized Portfolio Single Page Website Made Using React and Next.js , Highlighting my Skills , Work Experience and Projects .
            </p>
            <button className={styles.github} >
              <a className={styles.githuba}  href="https://github.com/30saharsh/Portfolio-">Github</a>
            </button>
            <button  className={styles.live}  >
              {" "}
              <a  className={styles.livea} href="https://portfolio-mu-azure-41.vercel.app/">Live</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
