import {React,useCallback} from 'react';
import '../styles/LandingPage.css';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
 
const LandingPage = () => {
    const text = "full stack web developer";
    const options={
        particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              },
            },
            color: {
              value: ["#2C9CCB", "#DE0F3B", "#725DB0", "#11B53A"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
            },
            size: {
              value: { min: 1, max: 8 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1
                }
              },
              push: {
                quantity: 4
              },
            },
          },
        };
    
    const particlesInit=useCallback(async(engine)=>{
        await loadFull(engine);

    },[]);
    return (
        
         <div className="LandingPage">
            <Particles options={options} init={particlesInit}/>
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