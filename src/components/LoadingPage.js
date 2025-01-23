import React, { useState, useEffect } from 'react';
import '../styles/LoadingPage.css';
import Transitions from './Transitions';
const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  },[]);

  if (!isLoading) {
    return null; 
  }

  return (
    <Transitions>
      <div className="LoadingPage">
        <div className="dotArea">
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
    </Transitions>
    
  );
};

export default LoadingPage;
