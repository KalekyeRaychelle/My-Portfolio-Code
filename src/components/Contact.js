import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef} id='contact'
      className={`contact-section${isVisible ? ' visible' : ''}`}
    >
      <span className="contact-kicker">Get In Touch</span>
      <h2 className="contact-title">
        Let&apos;s work
        <em>together</em>
      </h2>
      <div className="contact-card">
        <div className="contact-inner">
          <p className="contact-subtext">
            Whether you have a project in mind, want to collaborate on AI
            research, or just want to connect, my inbox is always open.
          </p>

          <a
            className="contact-mailto"
            href="mailto:kalekyeraychelle@gmail.com"
            aria-label="Email Raychelle Kalekye"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            <span>kalekyeraychelle@gmail.com</span>
          </a>

          <div className="contact-divider" aria-hidden="true" />

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/raychelle-kalekye-0825602ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/KalekyeRaychelle"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.kaggle.com/raychellekalekye"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle
            </a>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Contact;
