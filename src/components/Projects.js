import React from 'react';
import pizzaImage from '../assets/paulsPizza.png';
import pizzaImage2 from '../assets/aboutPizza.png';
import '../styles/Projects.css';
import Transitions from './Transitions';
const Projects = () => {
  return (
    <div className="Projects">
      <h2>MY PROJECTS</h2>
      <Transitions>
        
      <div className="project">
        <h3>1. PAUL'S PIZZA</h3>
        <div className="description">
          <p>
            This is the first website I've made using React.js for a pizza shop located in Mombasa.
          </p>
          <p>
            <a 
              href="https://github.com/KalekyeRaychelle/PaulsPizza/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              GitHub Link
            </a>
          </p>
          <p>
            <a 
              href="https://your-live-project-link.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              Actual Project Link
            </a>
          </p>
        </div>
        <div className="screenshot">
          <img src={pizzaImage} alt="Screenshot of Paul's Pizza project" />
          <img src={pizzaImage2} alt="Screenshot of Paul's Pizza About"/>
        </div>
      </div>
      </Transitions>
    </div>
  );
};

export default Projects;
