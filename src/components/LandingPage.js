import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import canvasDots from './canvasDotsBg';

const LandingPage = () => {
  const text = "full stack web developer";

  useEffect(() => {
    canvasDots();
  }, []); 

  return (
    <div className="LandingPage">
      <canvas className="canvas-2"></canvas>

      <div className="topSide">
        <p className="topHeading">HI! My name is Raychelle Kalekye</p>
        <p className="nextHeading">
          I am a{' '}
          <span className="text">
            {text.split('').map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </p>
      </div>
      <div className="myResume">
        <button onClick={'https://drive.google.com/file/d/1LqgSUX7DcUYTPtcij0OTBonxlwvUcWjq/view?usp=sharing'}>MY RESUME</button>
      </div>
    </div>
  );
};

export default LandingPage;
