import { HistoryItem, InputItem, QueueItem, Recording, ScheduleItem } from '../types';

// Mock data for inputs
export const inputMonitorData: InputItem[] = [
  { id: '1', name: 'Input 1', status: 'inactive', secondary: 'Input 2' },
  { id: '2', name: 'No Signal', status: 'no-signal', secondary: 'Input 4' },
  { id: '3', name: 'No Signal', status: 'no-signal', secondary: 'Input 5' },
  { id: '4', name: 'Input 6', status: 'active', secondary: 'Input 6' },
  { id: '5', name: 'Input 3', status: 'active', secondary: 'Input 6' },
  { id: '6', name: 'Input 4', status: 'active', secondary: 'Input 7' },
  { id: '7', name: 'Signal', status: 'active', secondary: 'Input 8' },
  { id: '8', name: 'Input 11', status: 'active', secondary: 'Input 9' },
  { id: '9', name: 'Input 9', status: 'active', secondary: 'Input 8' },
  { id: '10', name: 'Input 11', status: 'active', secondary: 'Input 10' },
  { id: '11', name: 'Input 12', status: 'active', secondary: 'Input 11' },
  { id: '12', name: 'Input 12', status: 'active', secondary: 'Input 12' },
];

// Mock data for recordings
export const activeRecordingsData: Recording[] = [
  {
    id: '1',
    title: 'Stullo A',
    duration: '02:57',
    inputSource: 'Input 5',
    streamUrl: 'rtmp://192.168.1:50/live/studio',
    inputType: 'Input Type',
    bitrate: '3416 kb/s',
  },
];

// Mock data for active recording
export const activeRecordingData = {
  title: 'Studio A Live',
  inputs: ['Input 5', 'Input 6', 'Tane Mah.'],
  metadata: [
    { label: 'Input 10 23', date: '1/apr 2024', inputs: ['Input 9', 'Input 3', 'Input 9'] },
  ],
};

// Mock data for ingest schedule
export const ingestScheduleData: ScheduleItem[] = [
  { id: '1', title: 'Clip 01', time: '10:00', date: 'Tomorrow', input: 'Input 9' },
];

// Mock data for ingest history
export const ingestHistoryData: HistoryItem[] = [
  { id: '1', title: 'News Intro', date: '18 Apr 2024' },
  { id: '2', title: 'Event Highlights', date: '17 Apr 2024' },
  { id: '3', title: 'Studio A Live', date: '15 Apr 2024' },
];

// Mock data for proxy queue
export const proxyQueueData: QueueItem[] = [
  { id: '1', title: 'Clip C', progress: 50, quality: '50 %' },
  { id: '2', title: 'Clip D', progress: 20, quality: '720 p' },
  { id: '3', title: 'News Segment', progress: 10, quality: '1080 p' },
];