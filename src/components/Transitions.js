import React, { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Transitions = ({ children }) => {
  const controls = useAnimation();

  const rotateAnimation = {
    initial: { rotateY: 90 },
    animate: { rotateY: 0 },
    exit: { rotateY: -90 },
  };

  const handleScroll = useCallback(() => {
    controls.start('animate');
  }, [controls]); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <motion.div
      className="page"
      transition={{
        ease: 'easeInOut',
        duration: 1,
      }}
      variants={rotateAnimation}
      initial="initial"
      animate={controls}
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default Transitions;

