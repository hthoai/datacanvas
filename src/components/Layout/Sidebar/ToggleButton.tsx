import React from 'react';
import { ChevronLeft } from 'lucide-react';
import clsx from 'clsx';

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function ToggleButton({ isOpen, onClick, className }: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx('toggle-button', className)}
      aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
    >
      <ChevronLeft 
        className={clsx(
          'w-5 h-5 text-gray-400 transition-transform',
          !isOpen && 'rotate-180'
        )} 
      />
    </button>
  );
}