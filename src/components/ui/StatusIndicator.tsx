import React from 'react';
import { InputStatus } from '../../types';

interface StatusIndicatorProps {
  status: InputStatus;
  size?: 'sm' | 'md' | 'lg';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, size = 'md' }) => {
  const getStatusColor = (status: InputStatus): string => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-red-500';
      case 'no-signal':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'w-2 h-2';
      case 'lg':
        return 'w-4 h-4';
      default:
        return 'w-3 h-3';
    }
  };

  return (
    <div
      className={`${getStatusColor(status)} ${getSizeClass(
        size
      )} rounded-full inline-block mr-2`}
      aria-label={`Status: ${status}`}
    />
  );
};

export default StatusIndicator;