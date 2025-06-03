
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'bg-brand-highlight-primary text-brand-text-on-highlight hover:bg-yellow-500 focus:ring-brand-highlight-primary';
      break;
    case 'secondary':
      variantStyles = 'bg-brand-highlight-secondary text-white hover:bg-blue-700 focus:ring-brand-highlight-secondary';
      break;
    case 'outline':
      variantStyles = 'bg-transparent border-2 border-brand-highlight-primary text-brand-highlight-primary hover:bg-brand-highlight-primary hover:text-brand-text-on-highlight focus:ring-brand-highlight-primary';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-5 py-2.5 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-6 py-3 text-lg';
      break;
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
