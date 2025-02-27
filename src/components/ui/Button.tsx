import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-all duration-200 transform cursor-pointer';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  // Variant classes with enhanced hover/active effects
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:bg-blue-800 active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 hover:shadow-md active:bg-gray-800 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50',
    success: 'bg-green-600 text-white hover:bg-green-700 hover:shadow-md active:bg-green-800 active:scale-95 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50',
    danger: 'bg-red-600 text-white hover:bg-red-700 hover:shadow-md active:bg-red-800 active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm active:bg-gray-100 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
  };
  
  // Disabled classes
  const disabledClasses = 'opacity-50 cursor-not-allowed transform-none shadow-none';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Compile all classes
  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${(disabled || isLoading) ? disabledClasses : ''}
    ${widthClasses}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button; 