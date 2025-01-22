import React, { useEffect } from 'react';
import '../styles/About.css';
import canvasDotss from './otherCanvas';
import sqlPic from '../assets/sqlLogo.png';
import gitLogo from '../assets/gitLogo.png';
import reactLogo from '../assets/reactLogo.png';
import nodeLogo from '../assets/nodeLogo.png'
import azureLogo from '../assets/azurLovl.png'


const About = () => {
  useEffect(() => {
    canvasDotss();
  }, []);

  return (

      
    <div className="about">
    
    <canvas className="canvas-3"></canvas>
    
    <div className="shortParagraph">
    <img src="https://img.icons8.com/windows/96/FD7E14/user.png" alt="user" /><h3>About Me</h3>
      <p>
        I am an aspiring web developer passionate in creating user-friendly websites. I am proficient in backend framework Express.js
        and frontend framework React.js to create dynamic applications. I am also an expert in HTML and CSS. I am currently learning JQuery.
        I am also competent in using Azure cloud services. Moreover, I am skilled in SQL for managing database systems.
        I am an inquisitive person always trying to stay in touch with current technologies, ready to rise to new challenges and
        push myself to explore new environments.
      </p>
    </div>
    <div className='LanguagesSection'>
      <div className='language'>
        <img src={nodeLogo} alt='nodeLogo'/>
      </div>
      <div className='language'>
        <img src={azureLogo} alt='azureLogo'/>
      </div>
      <div className='language'>
        <img src={sqlPic} alt='sqlLogo'/>
      </div>
      <div className='language'>
        <img src={reactLogo} alt='reactLogo'/>
      </div>
      <div className='language'>
        <img src={gitLogo} alt='gitLogo'/>
      </div>
    </div>
  </div>
   
  );
};

export default About;
