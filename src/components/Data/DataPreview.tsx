import React from 'react';
import { Table } from 'lucide-react';
import { DataFile } from '../../types';

interface DataPreviewProps {
  data: DataFile['data'];
  filename: string;
}

export function DataPreview({ data, filename }: DataPreviewProps) {
  if (!data.length) return null;
  
  const columns = Object.keys(data[0]);
  const previewRows = data.slice(0, 5);

  return (
    <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
      <div className="flex items-center gap-2 text-gray-400">
        <Table className="w-5 h-5" />
        <span className="font-medium">{filename}</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-400 uppercase">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-4 py-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {previewRows.map((row, i) => (
              <tr key={i} className="border-t border-gray-700">
                {columns.map((column) => (
                  <td key={column} className="px-4 py-2 text-gray-300">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}