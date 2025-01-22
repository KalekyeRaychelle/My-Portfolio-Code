import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import LoadingPage from './components/LoadingPage';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
 
  return (
    <div className="App">
      <LoadingPage/>

      <LandingPage/>
      <About/>
      <Projects/>
      <Contact/>
    
      
    </div>
  );
}

export default App;

