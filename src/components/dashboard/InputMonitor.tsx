import React from 'react';
import { InputItem } from '../../types';
import Card from '../ui/Card';
import StatusIndicator from '../ui/StatusIndicator';

interface InputMonitorProps {
  inputs: InputItem[];
}

const InputMonitor: React.FC<InputMonitorProps> = ({ inputs }) => {
  return (
    <div className="w-full">
      <h2 className="text-gray-200 text-lg font-medium mb-4 uppercase tracking-wide">
        Input Monitor
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {inputs.map((input) => (
          <Card key={input.id} className="transition-transform duration-200 hover:translate-y-[-2px]">
            <div className="flex items-center mb-2">
              <StatusIndicator status={input.status} />
              <span className="text-gray-200 font-medium">{input.name}</span>
            </div>
            {input.secondary && (
              <div className="text-gray-400 text-sm pl-5">{input.secondary}</div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InputMonitor;