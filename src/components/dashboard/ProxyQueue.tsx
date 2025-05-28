import React from 'react';
import { QueueItem } from '../../types';
import Card from '../ui/Card';

interface ProxyQueueProps {
  queueItems: QueueItem[];
}

const ProxyQueue: React.FC<ProxyQueueProps> = ({ queueItems }) => {
  const getProgressColorClass = (index: number, totalItems: number): string => {
    if (index === 0) return 'bg-green-500';       // First item: green
    if (index === 1) return 'bg-blue-500';        // Second item: blue
    if (index === totalItems - 1) return 'bg-red-500'; // Last item: red
    return 'bg-gray-500';                         // Default: gray (or any other fallback)
  };

  return (
    <div className="w-full">
      <h2 className="text-gray-200 text-lg font-medium mb-4 uppercase tracking-wide">
        Proxy Queue
      </h2>
      
      <Card>
        <div className="divide-y divide-gray-700">
          {queueItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`py-3 ${index === 0 ? 'pt-0' : ''} ${index === queueItems.length - 1 ? 'pb-0' : ''}`}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-200">{item.title}</div>
                <div className="text-gray-300">{item.quality}</div>
              </div>
              <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getProgressColorClass(index, queueItems.length)}`} 
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProxyQueue;