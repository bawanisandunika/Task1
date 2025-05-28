import React from 'react';
import { ScheduleItem } from '../../types';
import Card from '../ui/Card';

interface IngestScheduleProps {
  scheduleItems: ScheduleItem[];
}

const IngestSchedule: React.FC<IngestScheduleProps> = ({ scheduleItems }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-200 text-lg font-medium uppercase tracking-wide">
          Ingest Schedule
        </h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
          VIEW ALL
        </a>
      </div>
      
      <div className="space-y-2">
        {scheduleItems.map((item) => (
          <Card key={item.id} className="hover:bg-gray-800 transition-colors duration-200">
            <div className="text-gray-200 font-medium mb-1">{item.title}</div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-400">
                {item.date}, <span className="text-gray-300">{item.time}</span>
              </div>
              <div className="text-gray-300">{item.input}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IngestSchedule;