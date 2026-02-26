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
       I am an Artificial Intelligence Developer specializing in machine learning and natural language processing. I develop and deploy models that power intelligent, real-world applications.
      </p>
      <p>
       My core stack includes Python, where I build ML pipelines and AI-driven systems, and Flask for designing lightweight, scalable backend services that bring machine learning models into production. I work with modern ML frameworks to develop, fine-tune, and evaluate models with a strong focus on performance and practical deployment.
      </p>
      <p>
         Beyond AI, I have a solid foundation in full-stack development, working with React.js, Express.js, SQL, and cloud services. This enables me to build complete end-to-end systems from data processing and model development to API design and user-facing applications.
      </p>
      <p>
        
       I am driven by curiosity and continuous learning, constantly exploring emerging technologies to build scalable and responsible AI systems that create meaningful impact.

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
