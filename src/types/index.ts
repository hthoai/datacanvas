export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: number;
  dataPreview?: {
    filename: string;
    data: Array<Record<string, any>>;
  };
  visualization?: {
    type: 'line' | 'bar' | 'scatter';
    data: any[];
    xKey: string;
    yKey: string;
    title: string;
  };
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  lastUpdated: number;
  starred?: boolean;
}

export interface DataFile {
  filename: string;
  data: Array<Record<string, any>>;
}