import React from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ 
  src, 
  alt, 
  size = '60px',
  delay = 0,
  className = '' 
}) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 360,
        transition: { duration: 0.4 }
      }}
    >
      <img 
        src={src} 
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </motion.div>
  );
};

export default TechIcon;