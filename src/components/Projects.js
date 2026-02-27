import React, { useEffect, useRef, useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 'pauls-pizza',
      title: "Paul's Pizza",
      description:
        'A full restaurant website for a pizza shop in Mombasa - featuring menus, reservations, and a beautiful food-forward design.',
      tags: ['React.js', 'CSS', 'Responsive'],
      gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffb74d 50%, #e65100 100%)',
     
      githubUrl: 'https://github.com/KalekyeRaychelle/PaulsPizza'
    },
    {
      id: 'legal-query-classifier',
      title: 'Legal Query Classifier',
      description:
        'Classifies legal queries using roBERTa and maps them to the relevant Kenyan Act, helping users understand which legislation applies to their situation.',
      tags: ['Python', 'Flask', 'NLP', 'ML'],
      gradient: 'linear-gradient(135deg, #fce4ec 0%, #f48fb1 50%, #880e4f 100%)',
  
      githubUrl: 'https://github.com/KalekyeRaychelle/Legal-Query-Classifier'
    },
    {
      id: 'uhaki-legal-chatbot',
      title: 'Uhaki Legal Chatbot',
      description:
        'An AI-powered legal chatbot for the Kenyan context. Uses a RAG pipeline with vector databases storing Kenyan Acts, answered by a Qwen 3-8B LLM.',
      tags: ['Python', 'RAG', 'Vector DB', 'Qwen 3-8B', 'LLM'],
      gradient: 'linear-gradient(135deg, #e8f5e9 0%, #66bb6a 50%, #1b5e20 100%)',
     
      githubUrl: 'https://github.com/raychelleKalekye/Uhaki-legal-chatbot'
    }
  ];

  const getPlaceholderTitle = (project) => {
    if (project.id === 'legal-query-classifier') {
      return 'Legal Classifier';
    }
    if (project.id === 'uhaki-legal-chatbot') {
      return 'Uhaki Chatbot';
    }
    return project.title;
  };

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
      ref={sectionRef}
      className={`projects-section${isVisible ? ' visible' : ''}`}
    >
      <span className="projects-kicker">My Work</span>
      <h2 className="projects-title">Selected Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            {/* TODO: replace with <img src={} alt={} /> */}
            <div
              className="project-placeholder"
              style={{ background: project.gradient }}
            >
              <span>
                {getPlaceholderTitle(project)} {project.emoji}
              </span>
            </div>

            <div className="project-card-body">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>

              {/* TODO: add GitHub URL */}
              <a href={project.githubUrl} className="project-github-link">
                GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
