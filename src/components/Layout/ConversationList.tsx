import React from 'react';
import { MessageSquare, Plus, ChevronLeft } from 'lucide-react';
import { Conversation } from '../../types';
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
  return (
    <>
      <div
        className={clsx(
          'fixed top-0 left-0 h-full bg-gray-900 transition-all duration-300 border-r border-gray-800',
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

        <div className="overflow-y-auto h-[calc(100vh-5rem)]">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelect(conv.id)}
              className={clsx(
                'w-full text-left p-4 hover:bg-gray-800 transition-colors',
                activeId === conv.id && 'bg-gray-800'
              )}
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-gray-400" />
                <span className="text-sm truncate">{conv.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onToggle}
        className={clsx(
          'fixed top-4 left-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors',
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