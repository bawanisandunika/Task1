import React from 'react';
import { QueueItem } from '../../types';
import Card from '../ui/Card';

interface ProxyQueueProps {
  queueItems: QueueItem[];
}

const ProxyQueue: React.FC<ProxyQueueProps> = ({ queueItems }) => {
  const getProgressColorClass = (title: string): string => {
    if (title.includes('Clip C')) return 'bg-blue-500';   // Clip C → Blue
    if (title.includes('Clip D')) return 'bg-green-500';  // Clip D → Green
    return 'bg-red-500';                                 // All others → Red
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
                  className={`h-full ${getProgressColorClass(item.title)}`} 
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