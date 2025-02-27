import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = false,
  icon,
  className = '',
  id,
  ...props
}) => {
  // Generate a unique ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  // Base classes
  const baseInputClasses = 'block px-3 py-2 border rounded-md focus:outline-none focus:ring-2';
  
  // Context-dependent classes
  const contextClasses = error
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Icon padding
  const iconPadding = icon ? 'pl-10' : '';
  
  // Compile all classes
  const inputClasses = `
    ${baseInputClasses}
    ${contextClasses}
    ${widthClasses}
    ${iconPadding}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={inputClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500" id={`${inputId}-helper`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input; 