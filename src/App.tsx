import React from 'react';
import { AppProvider } from './providers/AppProvider';
import { MainLayout } from './layouts/MainLayout';
import './styles/index.css';

export function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}