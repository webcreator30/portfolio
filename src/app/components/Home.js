import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className="main">
          <div className="left">
          <h1>Hey Myself , <span className='my-name' >Saharsh</span> a passionate Full Stack MERN Developer</h1>
          <h2>Connect with me to Digitalize your work using your Super Cool Personal Website !</h2>
          <button><a href="https://drive.google.com/file/d/1aACTH6gBvLhLjcCxKFa9w3tdKXIrABNs/view?usp=share_link" className='resume' >Resume</a></button>
          </div>
          <div className="right">
         <Image
         src="/my.jpg"
         alt="Description of Image 1"
         width={380} 
         height={500}
         className='my-pic'
         />
          </div>
      </div>
    </>
  )
}

export default Home
