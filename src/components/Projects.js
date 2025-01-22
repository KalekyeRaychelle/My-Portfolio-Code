import React from 'react';
import pizzaImage from '../assets/paulsPizza.png';
import '../styles/Projects.css'
const Projects = () => {
  return (
    <div className='Projects'>
      <h2>MY PROJECTS</h2>
      <div className='project'>
        <h3>1. PAUL'S PIZZA</h3>
        <div className='description'>
        <p>This is a website of a pizza hut located in Mkongeni,Mombasa.
            Made using react.js front end framework and express.js framework for backend.</p>
        <p>
            <a href="https://github.com/KalekyeRaychelle/PaulsPizza/" target="_blank" rel="noopener noreferrer">
            Github Link
            </a>
        </p>
        <p>Actual Link</p>
        </div>
        <div className='screenshot'>
          <img src={pizzaImage} alt='pizza'/>
        </div>
      </div>
    
    </div>
  )
}

export default Projects;
