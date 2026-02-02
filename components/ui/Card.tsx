import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-dark-lighter border border-dark-border rounded-xl p-6
        ${hover ? 'glow-hover cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
