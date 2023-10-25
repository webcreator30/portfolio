"use client"
import Link from 'next/link'
import {useState} from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import Loader from './Loader'

const NavBar = () => {
  
    const [ShowNavBar, setShowNavBar] = useState(false);
    const [Loading, setLoading] = useState(false);
    const handleClick = () =>{
setLoading(true);
setTimeout(() => {
  setLoading(false);
}, 2000);
    }
  return (
    <div>
      <nav className='main-nav'>
      
        <div className="logo">
            <h2>MERN  <span className='develop' >DEVELOPER</span> </h2>
        </div>
        <div className={ShowNavBar ? "menu-link responsive-menu":"menu-link"}>
            
                <Link href="/" onClick={handleClick} >Home</Link>
                <Link href="/projects" onClick={handleClick}>Projects</Link>
                <Link href="/skills"  onClick={handleClick} >Skills</Link>
                <Link href="/about" onClick={handleClick} >About</Link>
                <Link href="/contact" onClick={handleClick} >Contact Me</Link>
              
            
        </div>
        <div className="social-media">
            <ul className='social-media-dekstop'>
             
                   <li><a href="https://www.linkedin.com/in/saharsh-shrivastava-71b8b2203/"><BsLinkedin className='linkedin' /></a></li> 
       
               <li><a href="https://github.com/30saharsh"><BsGithub className='Github' /></a></li> 
               <li><a href="https://github.com/30saharsh"><BsTwitter/></a></li> 
            </ul>
        </div>
        <div className='hamburger-menu'>
            <a href="#" onClick={()=>setShowNavBar(!ShowNavBar)}><GiHamburgerMenu/></a>

        </div>
      </nav>
      { Loading && <Loader/>}
    </div>
  )
}

export default NavBar
