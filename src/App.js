import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import LoadingPage from './components/LoadingPage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
 
  return (
    <div className="App">
      <LoadingPage/>
      <LandingPage/>
      <Header/>
      <div id='About'>
       <About/>
      </div>
      <div id='Projects'>
       <Projects/>
      </div>
      <div id='Contact'>
       <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

