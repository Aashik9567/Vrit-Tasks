import React from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  top = 0, 
  left = 0, 
  angle = 0,
  delay = 0,
  className = ''
}) => {
  const boxShadow = '0px 20px 40px -8px #1018281A, 0px 20px 40px -8px #1018280D';

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `${top}px`,
        left: `${left}px`,
        transform: `rotate(${angle}deg)`,
        opacity: 1
      }}
      animate={{
        y: [0, -10, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <img 
        src={src} 
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          boxShadow
        }}
      />
    </motion.div>
  );
};

export default AnimatedImage;