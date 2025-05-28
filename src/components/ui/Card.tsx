import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;