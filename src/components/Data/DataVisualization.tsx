import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface DataVisualizationProps {
  type: 'line' | 'bar' | 'scatter';
  data: any[];
  xKey: string;
  yKey: string;
  title: string;
}

export function DataVisualization({ type, data, xKey, yKey, title }: DataVisualizationProps) {
  return (
    <div className="h-80 bg-gray-800/50 rounded-lg p-4">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey={xKey}
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
          />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#F3F4F6'
            }}
          />
          <Line
            type="monotone"
            dataKey={yKey}
            stroke="#06B6D4"
            strokeWidth={2}
            dot={{ fill: '#06B6D4' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}