import React from 'react';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import InputMonitor from '../components/dashboard/InputMonitor';
import ActiveRecordings from '../components/dashboard/ActiveRecordings';
import ActiveRecording from '../components/dashboard/ActiveRecording';
import IngestSchedule from '../components/dashboard/IngestSchedule';
import IngestHistory from '../components/dashboard/IngestHistory';
import ProxyQueue from '../components/dashboard/ProxyQueue';

import {
  activeRecordingData,
  activeRecordingsData,
  ingestHistoryData,
  ingestScheduleData,
  inputMonitorData,
  proxyQueueData,
} from '../utils/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Header />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <InputMonitor inputs={inputMonitorData} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ActiveRecordings recordings={activeRecordingsData} />
              <ActiveRecording 
                title={activeRecordingData.title}
                inputs={activeRecordingData.inputs}
                metadata={activeRecordingData.metadata}
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <IngestSchedule scheduleItems={ingestScheduleData} />
            <IngestHistory historyItems={ingestHistoryData} />
            <ProxyQueue queueItems={proxyQueueData} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;