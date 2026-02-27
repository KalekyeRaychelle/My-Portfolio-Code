import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
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
      ref={sectionRef} id='about'
      className={`about-section${isVisible ? ' visible' : ''}`}
    >
      <div className="about-left">
        <span className="about-kicker">About Me</span>
        <h2 className="about-title">
          Building intelligent,
          <em>real-world systems</em>
        </h2>
        <div className="about-divider" />

        <p className="about-paragraph">
          I am an Artificial Intelligence Developer specializing in machine learning and natural language processing. I develop and deploy models that power intelligent, real-world applications.
        </p>
        <p className="about-paragraph">
          My core stack includes Python, where I build ML pipelines and AI-driven systems, and Flask for designing lightweight, scalable backend services that bring machine learning models into production. I work with modern ML frameworks to develop, fine-tune, and evaluate models with a strong focus on performance and practical deployment.
        </p>
        <p className="about-paragraph">
          Beyond AI, I have a solid foundation in full-stack development, working with React.js, Express.js, SQL, and cloud services. This enables me to build complete end-to-end systems from data processing and model development to API design and user-facing applications.
        </p>
        <p className="about-paragraph">
          I am driven by curiosity and continuous learning, constantly exploring emerging technologies to build scalable and responsible AI systems that create meaningful impact.
        </p>
      </div>

      <div className="about-right">
        <p className="skills-label skills-label-first">AI &amp; Machine Learning</p>
        <div className="skills-list">
          <span className="skill-pill">Python</span>
          <span className="skill-pill">TensorFlow</span>
          <span className="skill-pill">PyTorch</span>
          <span className="skill-pill">Scikit-learn</span>
          <span className="skill-pill">NLP</span>
        
      
        </div>

        <p className="skills-label">Frontend &amp; Backend</p>
        <div className="skills-list">
          <span className="skill-pill">React.js</span>
          <span className="skill-pill">Node.js</span>
          <span className="skill-pill">Express.js</span>
          <span className="skill-pill">TypeScript</span>
          <span className="skill-pill">Flask</span>
          <span className="skill-pill">MongoDB</span>
        </div>

        <p className="skills-label">Cloud &amp; Tools</p>
        <div className="skills-list">
          <span className="skill-pill">AWS</span>
          <span className="skill-pill">Azure</span>
          <span className="skill-pill">Docker</span>
          <span className="skill-pill">Git</span>
          <span className="skill-pill">Figma</span>
        </div>
      </div>
    </section>
  );
};

export default About;
