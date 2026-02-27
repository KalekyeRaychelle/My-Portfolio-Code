import React from 'react';
import Navbar from './components/Header';
import Hero from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navbar — fixed floating pill, sits above everything */}
      <Navbar />

      {/* Hero — full viewport height landing section */}
      <Hero />

      {/* About — two column layout, text left skills right */}
      <About />

      {/* Projects — three card grid */}
      <Projects />

      {/* Contact — full width dark rose section */}
      <Contact />

      {/* Footer — cream/pink background, copyright + back to top */}
      <Footer />
    </>
  );
}

export default App;
