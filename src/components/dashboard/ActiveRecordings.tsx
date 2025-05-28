import React from 'react';
import { Recording } from '../../types';
import Card from '../ui/Card';
import StatusIndicator from '../ui/StatusIndicator';

interface ActiveRecordingsProps {
  recordings: Recording[];
}

const ActiveRecordings: React.FC<ActiveRecordingsProps> = ({ recordings }) => {
  return (
    <div className="w-full">
      <h2 className="text-gray-200 text-lg font-medium mb-4 uppercase tracking-wide">
        Active Recordings
      </h2>
      <div className="space-y-4">
        {recordings.map((recording) => (
          <Card key={recording.id}>
            <div className="flex items-center mb-4">
              <StatusIndicator status="active" />
              <span className="text-red-500 font-medium mr-3">
                01: {recording.duration}
              </span>
              <span className="text-gray-300">{recording.title}</span>
            </div>

            <div className="mb-4">
              <div className="text-gray-300 font-medium">Ingest {recording.inputSource}</div>
              <div className="text-gray-400 text-sm">{recording.streamUrl}</div>
            </div>

            <div className="divide-y divide-gray-700">
              <div className="pb-3">
                <div className="text-gray-400 text-sm">Input Type</div>
                <div className="text-gray-300">{recording.inputType}</div>
              </div>
              <div className="pt-3">
                <div className="text-gray-400 text-sm">Bitrate</div>
                <div className="text-gray-300">{recording.bitrate}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActiveRecordings;