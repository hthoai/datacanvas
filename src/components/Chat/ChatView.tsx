import React from 'react';
import { ChatInput } from './ChatInput';
import { ChatMessage } from './ChatMessage';
import { Message } from '../../types';

interface ChatViewProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onFileUpload: (files: File[]) => void;
}

export function ChatView({ messages, onSendMessage, onFileUpload }: ChatViewProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6 pb-24 pt-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-8 left-0 right-0 px-4">
        <div className={messages.length > 0 ? 'pl-0' : ''}>
          <ChatInput
            onSendMessage={onSendMessage}
            onFileUpload={onFileUpload}
          />
        </div>
      </div>
    </div>
  );
}