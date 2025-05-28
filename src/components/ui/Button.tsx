import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  className = '',
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700';
      case 'secondary':
        return 'bg-gray-600 text-white hover:bg-gray-700';
      case 'outline':
        return 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'text-xs py-1 px-2';
      case 'lg':
        return 'text-base py-3 px-6';
      default:
        return 'text-sm py-2 px-4';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${getVariantClasses()} ${getSizeClasses()} rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;