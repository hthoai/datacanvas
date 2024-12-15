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
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 border-r border-gray-800 w-64 z-10',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <Header isOpen={isOpen} />
        <Content
          conversations={conversations}
          activeId={activeId}
          onSelect={onSelect}
          onNew={onNew}
        />
      </aside>

      <button
        onClick={onToggle}
        className={clsx(
          "fixed p-2 rounded-lg bg-gray-800/90 hover:bg-gray-700/90 transition-colors z-20",
          isOpen ? "top-4 left-[17rem]" : "top-4 left-4"
        )}
        aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
      >
        <ChevronLeft 
          className={clsx(
            'w-5 h-5 text-gray-400 transition-transform',
            !isOpen && 'rotate-180'
          )} 
        />
      </button>
    </>
  );
}