import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='Contact'>
      
        <div className='emailForm'>
            <p>Send an email.</p>
            <form>
              <label for='email'>Email: </label>
              <input type='email' id='email'/>
              <label for='subject'>Subject: </label>
              <input type='text' id='subject'/>
              <label>Message: </label>
              <textarea rows="6" placeholder="Enter message..." name="message" required id='message'></textarea>
              <button>SUBMIT</button>
            </form>
        </div>
        <div className='socialMedia'>
          <p>Reach me on:</p>

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

export default Contact;
