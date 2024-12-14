import React from 'react';
import { Bot, User } from 'lucide-react';
import clsx from 'clsx';
import { DataPreview } from '../Data/DataPreview';
import { DataVisualization } from '../Data/DataVisualization';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { type, content } = message;

  return (
    <div className={clsx(
      'flex gap-4 p-6',
      type === 'bot' ? 'bg-gray-900/50' : 'bg-transparent'
    )}>
      <div className={clsx(
        'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
        type === 'bot' ? 'bg-cyan-500/20' : 'bg-gray-500/20'
      )}>
        {type === 'bot' ? (
          <Bot className="w-5 h-5 text-cyan-500" />
        ) : (
          <User className="w-5 h-5 text-gray-400" />
        )}
      </div>
      
      <div className="flex-1 space-y-4">
        <p className="text-gray-200 leading-relaxed">{content}</p>
        {message.dataPreview && (
          <DataPreview {...message.dataPreview} />
        )}
        {message.visualization && (
          <DataVisualization {...message.visualization} />
        )}
      </div>
    </div>
  );
}