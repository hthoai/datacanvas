import React from 'react';
import { ChatMessage } from './ChatMessage';
import { Message } from '../../types';

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
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
  );
}