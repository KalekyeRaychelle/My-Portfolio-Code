import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import LoadingPage from './components/LoadingPage';


function App() {
  return (
    <div className="App">
      <LoadingPage />  
      <LandingPage />
      <About />
    </div>
  );
}

export default App;

