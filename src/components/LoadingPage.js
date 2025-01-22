import React, { useState, useEffect } from 'react';
import '../styles/LoadingPage.css';

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
    <div className="LoadingPage">
      <div className="dotArea">
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
    </div>
  );
};

export default LoadingPage;
