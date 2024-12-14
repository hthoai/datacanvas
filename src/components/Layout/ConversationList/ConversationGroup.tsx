import React from 'react';
import { Conversation } from '../../../types';
import { ConversationItem } from './ConversationItem';

interface ConversationGroupProps {
  title: string;
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export function ConversationGroup({ title, conversations, activeId, onSelect }: ConversationGroupProps) {
  if (conversations.length === 0) return null;

  return (
    <div className="mb-4">
      <h2 className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">{title}</h2>
      {conversations.map((conv) => (
        <ConversationItem
          key={conv.id}
          conversation={conv}
          isActive={activeId === conv.id}
          onClick={() => onSelect(conv.id)}
        />
      ))}
    </div>
  );
}