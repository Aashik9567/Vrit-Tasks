import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  backgroundColor,
  width = '592px',
  height = '341px',
  borderRadius = '30px',
  ...props 
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor,
        width,
        height,
        borderRadius,
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;