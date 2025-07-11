import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ 
  children, 
  className = '', 
  backgroundColor = '#F5F5F5',
  isClickable = false,
  onClick,
  isExpanded = false,
  ...props 
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{
        backgroundColor,
        borderRadius: '30px',
        ...props.style
      }}
      onClick={onClick}
      whileHover={isClickable ? { scale: 1.02 } : {}}
      whileTap={isClickable ? { scale: 0.98 } : {}}
      animate={isExpanded ? { 
        height: 'auto',
        transition: { duration: 0.3 }
      } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StatCard;