import React from 'react';
import '../styles/About.css';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const About= ()=>{
    return(

        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="about"
      >
        <img width="96" height="96" src="https://img.icons8.com/windows/96/FD7E14/user.png" alt="user"/>
        <div className="short paragraph">
            <p>
                I am an aspiring web developer passionate in creating user-friendly websites. I am proficient in backend framework Express.js 
                and frontend framework React.js to create dynamic applications.I am also expert in HTML,CSS, Python for data analytics and Kotlin for mobile app development. 
                I am also competent in using Azure cloud services. Moreover, I am skilled in SQL for managing database systems. 
                I am an inquisitive person always trying to stay in touch with current technologoies, ready to rise to new challenges and
                push myself to explore new environments.
            </p>
        </div>

    
    </motion.div>
    )
}
export default About;
    