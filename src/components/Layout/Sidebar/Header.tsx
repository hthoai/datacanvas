import React from 'react';
import { Database } from 'lucide-react';

interface HeaderProps {
  isOpen: boolean;
}

export function Header({ isOpen }: HeaderProps) {
  if (!isOpen) return null;
  
  return (
    <div className="flex items-center gap-2 p-4 border-b border-gray-800">
      <Database className="w-5 h-5 text-cyan-500" />
      <span className="font-semibold text-gray-100">DataCanvas</span>
    </div>
  );
}