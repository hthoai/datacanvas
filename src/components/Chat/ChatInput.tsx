import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { ACCEPTED_FILE_TYPES } from '../../constants/file-types';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onFileUpload: (files: File[]) => void;
  autoFocus?: boolean;
}

export function ChatInput({ onSendMessage, onFileUpload, autoFocus }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const { getRootProps, getInputProps } = useDropzone({
    accept: ACCEPTED_FILE_TYPES,
    onDrop: onFileUpload,
    multiple: false,
    noClick: true,
    noKeyboard: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-4xl mx-auto" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="relative flex items-center bg-white/10 backdrop-blur-lg rounded-lg border border-gray-600 p-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.csv,.xlsx,.xls';
            fileInput.multiple = false;
            fileInput.onchange = (e) => {
              const files = (e.target as HTMLInputElement).files;
              if (files?.length) {
                onFileUpload([files[0]]);
              }
            };
            fileInput.click();
          }}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Upload file"
        >
          <Upload className="w-5 h-5 text-gray-400" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 bg-transparent border-none outline-none px-4 text-white placeholder-gray-400"
          autoFocus={autoFocus}
        />
        
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