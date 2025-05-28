import React from 'react';
import { HistoryItem } from '../../types';
import Card from '../ui/Card';

interface IngestHistoryProps {
  historyItems: HistoryItem[];
}

const IngestHistory: React.FC<IngestHistoryProps> = ({ historyItems }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-200 text-lg font-medium uppercase tracking-wide">
          Ingest History
        </h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
          VIEW ALL
        </a>
      </div>
      
      <Card>
        <div className="divide-y divide-gray-700">
          {historyItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex justify-between items-center py-3 ${index === 0 ? 'pt-0' : ''} ${index === historyItems.length - 1 ? 'pb-0' : ''}`}
            >
              <div className="text-gray-200">{item.title}</div>
              <div className="text-gray-400 text-sm">{item.date}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default IngestHistory;