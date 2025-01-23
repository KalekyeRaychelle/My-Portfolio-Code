import React,{useRef}from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l3mqunq', 'template_tbvxqok', form.current, {
        publicKey: 'sUpQhrO6QcMQwtF4I',
      })
      .then(
        () => {
          window.alert('Your email has been sent');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Contact'>
        <div className='emailForm'>
            <p>Send an email.</p>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />

              <label htmlFor="message">Message:</label>
              <textarea rows="6" id="message" name="message" placeholder="Enter message..." required></textarea>

              <button type="submit">SUBMIT</button>
            </form>

        </div>
       

      </div>

  )
}

export default Contact;