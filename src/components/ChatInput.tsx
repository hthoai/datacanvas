import React, { useState } from 'react';
import { Send, Mic, Upload, Focus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onFileUpload: (files: File[]) => void;
}

export function ChatInput({ onSendMessage, onFileUpload }: ChatInputProps) {
  const [message, setMessage] = useState('');
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls']
    },
    onDrop: onFileUpload
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-4xl mx-auto">
      <div className="relative flex items-center bg-white/10 backdrop-blur-lg rounded-lg border border-gray-600 p-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Focus mode"
        >
          <Focus className="w-5 h-5 text-gray-400" />
        </button>
        
        <div {...getRootProps()} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
          <input {...getInputProps()} />
          <Upload className="w-5 h-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder-gray-400"
        />
        
        <button
          type="button"
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Voice input"
        >
          <Mic className="w-5 h-5 text-gray-400" />
        </button>
        
        <button
          type="submit"
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Send message"
        >
          <Send className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </form>
  );
}