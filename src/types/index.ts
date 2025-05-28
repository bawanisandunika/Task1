// Input status types
export type InputStatus = 'active' | 'inactive' | 'no-signal';

// Input item interface
export interface InputItem {
  id: string;
  name: string;
  status: InputStatus;
  secondary?: string;
}

// Recording interface
export interface Recording {
  id: string;
  title: string;
  duration: string;
  inputSource: string;
  streamUrl: string;
  inputType: string;
  bitrate: string;
}

// Schedule item interface
export interface ScheduleItem {
  id: string;
  title: string;
  time: string;
  date: string;
  input: string;
}

// History item interface
export interface HistoryItem {
  id: string;
  title: string;
  date: string;
}

// Queue item interface
export interface QueueItem {
  id: string;
  title: string;
  progress: number;
  quality: string;
}