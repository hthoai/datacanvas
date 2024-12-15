import React from 'react';
import { ChatInput } from './ChatInput';

interface ChatInputContainerProps {
  onSendMessage: (message: string) => void;
  onFileUpload: (files: File[]) => void;
  autoFocus?: boolean;
}

export function ChatInputContainer({ onSendMessage, onFileUpload, autoFocus }: ChatInputContainerProps) {
  return (
    <div className="fixed bottom-8 left-0 right-0 px-4">
      <div className="max-w-4xl mx-auto">
        <ChatInput
          onSendMessage={onSendMessage}
          onFileUpload={onFileUpload}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  );
}