import React from 'react';
import { Database } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Database className="w-5 h-5 text-cyan-500" />
      <span className="font-semibold text-gray-100">DataCanvas</span>
    </div>
  );
}