import React from 'react';

const CardContent = ({ 
  title, 
  subtitle, 
  description, 
  className = '',
  textAlign = 'left',
  padding = '32px'
}) => {
  return (
    <div 
      className={`relative z-10 ${className}`}
      style={{
        padding,
        textAlign
      }}
    >
      <h3 
        className="text-white font-bold mb-2"
        style={{
          fontSize: '32px',
          fontWeight: '700',
          fontFamily: 'Nohemi, sans-serif'
        }}
      >
        {title}
      </h3>
      
      <p 
        className="text-white font-medium mb-4"
        style={{
          fontSize: '18px',
          fontWeight: '500',
          fontFamily: 'Nohemi, sans-serif'
        }}
      >
        {subtitle}
      </p>
      
      <p 
        className="text-white text-sm leading-relaxed"
        style={{
          fontSize: '14px',
          fontWeight: '400',
          fontFamily: 'Nohemi, sans-serif',
          lineHeight: '1.5'
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default CardContent;