import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { Conversation } from '../../../types';
import { formatDate } from '../../../utils/helpers';
import clsx from 'clsx';

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

export function ConversationItem({ conversation, isActive, onClick }: ConversationItemProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full text-left p-3 rounded-lg hover:bg-gray-800/50 transition-colors mb-1',
        isActive && 'bg-gray-800/50'
      )}
    >
      <div className="flex items-center gap-3">
        <MessageSquare className="w-4 h-4 text-gray-400" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium truncate">{conversation.title}</span>
            {conversation.starred && (
              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            )}
          </div>
          <p className="text-xs text-gray-400 truncate">
            {formatDate(conversation.lastUpdated)}
          </p>
        </div>
      </div>
    </button>
  );
}