import React from 'react';
import { Database } from 'lucide-react';
import { ChatInputContainer } from '../Chat/ChatInputContainer';

interface LandingViewProps {
  onStart: (message: string) => void;
  onFileUpload: (files: File[]) => void;
}

export function LandingView({ onStart, onFileUpload }: LandingViewProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
          <Database className="w-8 h-8 text-cyan-500" />
        </div>
        <h1 className="text-4xl font-bold mb-3">DataCanvas</h1>
        <p className="text-gray-400 text-lg mb-12">Just Chat with Your Data</p>
      </div>
      
      <ChatInputContainer
        onSendMessage={onStart}
        onFileUpload={onFileUpload}
        autoFocus
      />
    </div>
  );
}