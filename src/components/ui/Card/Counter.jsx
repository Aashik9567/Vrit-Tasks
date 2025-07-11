import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ 
  end, 
  duration = 2, 
  fontSize = '120px',
  fontWeight = '800',
  color = '#FFFFFF',
  className = '',
  ...props 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(end * easeOutCubic);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <motion.span
      className={`font-black ${className}`}
      style={{
        fontSize,
        fontWeight,
        color,
        fontFamily: 'Nohemi, sans-serif'
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {count.toString().padStart(2, '0')}
    </motion.span>
  );
};

export default Counter;