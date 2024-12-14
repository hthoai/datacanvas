import React from 'react';
import clsx from 'clsx';
import { Conversation } from '../../../types';
import { Header } from './Header';
import { NewChatButton } from './NewChatButton';
import { ConversationGroup } from './ConversationGroup';

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function ConversationList({
  conversations,
  activeId,
  onSelect,
  onNew,
  isOpen,
  onToggle,
}: ConversationListProps) {
  const starredConversations = conversations.filter(conv => conv.starred);
  const recentConversations = conversations.filter(conv => !conv.starred);

  return (
    <>
      <div
        className={clsx(
          'sidebar-container',
          isOpen ? 'w-64' : 'w-0 -translate-x-full'
        )}
      >
        <Header isOpen={isOpen} onToggle={onToggle} />
        
        {isOpen && (
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
        )}
      </div>

      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors z-20"
          aria-label="Show sidebar"
        >
          <ChevronLeft className="w-5 h-5 rotate-180 text-gray-400" />
        </button>
      )}
    </>
  );
}