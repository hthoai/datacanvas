import React from 'react';
import { ConversationGroup } from '../ConversationList/ConversationGroup';
import { NewChatButton } from '../ConversationList/NewChatButton';
import { Conversation } from '../../../types';

interface ContentProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
}

export function Content({ conversations, activeId, onSelect, onNew }: ContentProps) {
  const starredConversations = conversations.filter(conv => conv.starred);
  const recentConversations = conversations.filter(conv => !conv.starred);

  return (
    <>
      <div className="p-4 bg-gray-900">
        <NewChatButton onClick={onNew} />
      </div>

      <div className="sidebar-content px-2">
        <ConversationGroup
          title="Starred"
          conversations={starredConversations}
          activeId={activeId}
          onSelect={onSelect}
        />
        <ConversationGroup
          title="Recent"
          conversations={recentConversations}
          activeId={activeId}
          onSelect={onSelect}
        />
      </div>
    </>
  );
}