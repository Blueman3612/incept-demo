import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  footer?: React.ReactNode;
  headerActions?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  footer,
  headerActions,
}) => {
  return (
    <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 