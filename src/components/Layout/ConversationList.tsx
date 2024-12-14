import React from 'react';
import { MessageSquare, Plus, ChevronLeft, Star } from 'lucide-react';
import { Conversation } from '../../types';
import { formatDate } from '../../utils/helpers';
import clsx from 'clsx';

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
          'fixed top-0 left-0 h-full bg-gray-900/95 backdrop-blur-sm transition-all duration-300 border-r border-gray-800 z-10',
          isOpen ? 'w-64' : 'w-0'
        )}
      >
        <div className="p-4">
          <button
            onClick={onNew}
            className="w-full flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-500 rounded-lg hover:bg-cyan-500/30 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-5rem)] px-2">
          {starredConversations.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">Starred</h2>
              {starredConversations.map((conv) => (
                <ConversationItem
                  key={conv.id}
                  conversation={conv}
                  isActive={activeId === conv.id}
                  onClick={() => onSelect(conv.id)}
                />
              ))}
            </div>
          )}

          <div>
            <h2 className="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">Recent</h2>
            {recentConversations.map((conv) => (
              <ConversationItem
                key={conv.id}
                conversation={conv}
                isActive={activeId === conv.id}
                onClick={() => onSelect(conv.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onToggle}
        className={clsx(
          'fixed top-4 left-4 p-2 rounded-lg bg-gray-800/90 hover:bg-gray-700 transition-colors z-20',
          !isOpen && 'translate-x-64'
        )}
      >
        <ChevronLeft className={clsx(
          'w-5 h-5 transition-transform',
          !isOpen && 'rotate-180'
        )} />
      </button>
    </>
  );
}

interface ConversationItemProps {
  conversation: Conversation;
  isActive: boolean;
  onClick: () => void;
}

function ConversationItem({ conversation, isActive, onClick }: ConversationItemProps) {
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