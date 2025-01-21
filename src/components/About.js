import React, { useEffect } from 'react';
import '../styles/About.css';
import canvasDotss from './otherCanvas';


const About = () => {
  useEffect(() => {
    canvasDotss();
  }, []);

  return (

    <div className="about">
     
      <canvas className="canvas-3"></canvas>
      <img src="https://img.icons8.com/windows/96/FD7E14/user.png" alt="user" />
      <div className="short paragraph">
        <p>
          I am an aspiring web developer passionate in creating user-friendly websites. I am proficient in backend framework Express.js
          and frontend framework React.js to create dynamic applications. I am also an expert in HTML and CSS. I am currently learning JQuery.
          I am also competent in using Azure cloud services. Moreover, I am skilled in SQL for managing database systems.
          I am an inquisitive person always trying to stay in touch with current technologies, ready to rise to new challenges and
          push myself to explore new environments.
        </p>
      </div>
      <div className='Languages'>
      <img src="../assets/gitLogo.png"/>
      <img src="../assets/gitLogo.png"/>
      <img src="../assets/gitLogo.png"/>
      <img src="../assets/gitLogo.png"/>

      </div>
    </div>
  );
};

export default About;
