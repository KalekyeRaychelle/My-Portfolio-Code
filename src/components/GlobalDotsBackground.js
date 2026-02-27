import React, { useEffect, useRef } from 'react';
import '../styles/GlobalDotsBackground.css';

const GlobalDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }

    let animationId;
    let dots = [];

    const palette = [
      [233, 30, 99],
      [244, 143, 177],
      [194, 24, 91],
      [136, 14, 79]
    ];

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createDots = () => {
      const area = window.innerWidth * window.innerHeight;
      const dotCount = Math.max(36, Math.floor(area / 26000));

      dots = Array.from({ length: dotCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: 0.55 + Math.random() * 1,
        alpha: 0.18 + Math.random() * 0.24,
        color: palette[Math.floor(Math.random() * palette.length)]
      }));
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x <= 0 || dot.x >= width) {
          dot.vx *= -1;
        }
        if (dot.y <= 0 || dot.y >= height) {
          dot.vy *= -1;
        }

        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, ${dot.alpha})`;
        context.fill();
      }

      animationId = window.requestAnimationFrame(draw);
    };

    const initialize = () => {
      setCanvasSize();
      createDots();
      draw();
    };

    initialize();
    window.addEventListener('resize', initialize);

    return () => {
      window.removeEventListener('resize', initialize);
      window.cancelAnimationFrame(animationId);
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, []);

  return <canvas ref={canvasRef} className="global-dots-canvas" aria-hidden="true" />;
};

export default GlobalDotsBackground;
