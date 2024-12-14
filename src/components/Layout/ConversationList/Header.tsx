import React from 'react';
import { ChevronLeft, Database } from 'lucide-react';
import clsx from 'clsx';

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Header({ isOpen, onToggle }: HeaderProps) {
  return (
    <div className="sidebar-header">
      <div className="flex items-center gap-2">
        <Database className="w-5 h-5 text-cyan-500" />
        <span className="font-semibold text-gray-100">DataCanvas</span>
      </div>
      <button
        onClick={onToggle}
        className="toggle-button"
        aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
      >
        <ChevronLeft className={clsx(
          'w-5 h-5 text-gray-400 transition-transform',
          !isOpen && 'rotate-180'
        )} />
      </button>
    </div>
  );
}