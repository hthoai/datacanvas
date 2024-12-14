import React from 'react';
import { Logo } from './Logo';
import { ToggleButton } from './ToggleButton';

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Header({ isOpen, onToggle }: HeaderProps) {
  return (
    <div className="sidebar-header">
      <Logo />
      <ToggleButton isOpen={isOpen} onClick={onToggle} />
    </div>
  );
}