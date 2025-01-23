import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='rightsideFooter'>
            <p>RAYCHELLE'S PORTFOLIO &copy; {new Date().getFullYear()}</p>
        </div>
        <div className='socialMedia'>
                  
        
                  <a href='https://github.com/KalekyeRaychelle/' target='_blank' rel='noopener noreferrer'>
                    <FaGithub className='icon' />
                  </a>
                  <a href='https://www.linkedin.com/in/raychelle-kalekye-0825602ba/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='icon' />
                  </a>
        </div>
    </div>
  )
}

export default Footer
