import React from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInputContainer } from './ChatInputContainer';
import { Message } from '../../types';

interface ChatViewProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onFileUpload: (files: File[]) => void;
}

export function ChatView({ messages, onSendMessage, onFileUpload }: ChatViewProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <ChatMessages messages={messages} />
      <ChatInputContainer
        onSendMessage={onSendMessage}
        onFileUpload={onFileUpload}
      />
    </div>
  );
}