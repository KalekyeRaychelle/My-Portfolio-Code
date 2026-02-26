import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import LoadingPage from './components/LoadingPage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
 
  return (
    <div className="App">
      <LoadingPage/>
      <LandingPage/>
      <div className="hero-about-bleed-divider" aria-hidden="true" />
      <div id='about' className="about-bleed-wrap">
       <About/>
      </div>
      <div id='projects'>
       <Projects/>
      </div>
      <div id='contact'>
       <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

