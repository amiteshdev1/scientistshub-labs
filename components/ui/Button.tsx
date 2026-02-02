import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block text-center";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
