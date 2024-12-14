import React from 'react';
import clsx from 'clsx';
import { ChevronLeft } from 'lucide-react';
import { Header } from './Header';
import { Content } from './Content';
import { Conversation } from '../../../types';

interface SidebarProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({
  conversations,
  activeId,
  onSelect,
  onNew,
  isOpen,
  onToggle,
}: SidebarProps) {
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
          <Content
            conversations={conversations}
            activeId={activeId}
            onSelect={onSelect}
            onNew={onNew}
          />
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