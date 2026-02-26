import React, { useEffect, useState } from 'react';
import '../styles/LandingPage.css';
import Navbar from './Header';

const TYPEWRITER_PHRASES = [
  'intelligent AI systems.',
  'full-stack web apps.',
  'machine learning models.'
];

const ML_CV_URL =
  'https://drive.google.com/file/d/1zwkdytzu6XFMp3CzaL6JlhKwUZo77OWT/view?usp=sharing';
const SOFTWARE_DEV_CV_URL =
  'https://drive.google.com/file/d/1tuLDFJ3DxwPEOH1NAFbwMDA_2TIPHnlr/view?usp=sharing';

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 3h7l5 5v13H7V3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v5h5M10 12h4M10 16h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LandingPage = () => {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timerId;

    if (!isDeleting && typedText === currentPhrase) {
      timerId = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % TYPEWRITER_PHRASES.length);
    } else {
      timerId = setTimeout(() => {
        const nextText = isDeleting
          ? currentPhrase.slice(0, typedText.length - 1)
          : currentPhrase.slice(0, typedText.length + 1);
        setTypedText(nextText);
      }, isDeleting ? 50 : 85);
    }

    return () => clearTimeout(timerId);
  }, [typedText, phraseIndex, isDeleting]);

  return (
    <section className="LandingPage" id="hero">
      <Navbar />

      <div className="hero-blob hero-blob-one" aria-hidden="true" />
      <div className="hero-blob hero-blob-two" aria-hidden="true" />
      <div className="hero-blob hero-blob-three" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-label hero-fade">Available for opportunities</p>

        <h1 className="hero-title hero-fade">
          <span>Raychelle</span>
          <em>Kalekye</em>
        </h1>

        <p className="hero-subtitle hero-fade">
          I build <span className="typewriter">{typedText || '\u00a0'}</span>
        </p>

        <div className="hero-buttons hero-fade">
          <a
            href={ML_CV_URL}
            className="hero-button hero-button-primary"
            target="_blank"
            rel="noreferrer"
          >
            <DocumentIcon />
            <span>Machine Learning CV</span>
          </a>
          <a
            href={SOFTWARE_DEV_CV_URL}
            className="hero-button hero-button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <DocumentIcon />
            <span>Software Dev CV</span>
          </a>
        </div>
      </div>

      <div className="hero-scroll hero-fade" aria-hidden="true">
        <span>SCROLL</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default LandingPage;
