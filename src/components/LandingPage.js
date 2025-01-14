import React from 'react';
import '../styles/LandingPage.css';

 
const LandingPage = () => {
    const text = "full stack web developer";
    return (
         <div className="LandingPage">
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
                <button>MY RESUME</button>
            </div>
            </div>
    );
};
export default LandingPage;