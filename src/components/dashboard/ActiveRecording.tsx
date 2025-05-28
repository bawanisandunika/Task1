import React from 'react';
import Card from '../ui/Card';
import StatusIndicator from '../ui/StatusIndicator';

interface ActiveRecordingProps {
  title: string;
  inputs: string[];
  metadata: {
    label: string;
    date: string;
    inputs: string[];
  }[];
}

const ActiveRecording: React.FC<ActiveRecordingProps> = ({ title, inputs, metadata }) => {
  return (
    <div className="w-full">
      <h2 className="text-gray-200 text-lg font-medium mb-4 uppercase tracking-wide">
        Active Recording
      </h2>
      <Card>
        <div className="flex items-center mb-4">
          <StatusIndicator status="active" />
          <span className="text-gray-200 font-medium">{title}</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {inputs.map((input, index) => (
            <div key={index} className="text-gray-300 text-sm">{input}</div>
          ))}
        </div>

        {metadata.map((item, index) => (
          <div key={index} className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <span className="text-gray-400">≡</span>
                <span className="ml-2 text-gray-300">{item.label}</span>
              </div>
              <span className="text-gray-400 text-sm">{item.date}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {item.inputs.map((input, idx) => (
                <div key={idx} className="text-gray-300 text-sm">{input}</div>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ActiveRecording;