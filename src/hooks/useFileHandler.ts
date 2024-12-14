import { useState } from 'react';
import { DataFile } from '../types';
import { parseCSV, parseExcel } from '../utils/parsers';

export function useFileHandler() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File): Promise<DataFile> => {
    setIsLoading(true);
    setError(null);
    
    try {
      let data;
      if (file.name.endsWith('.csv')) {
        data = await parseCSV(file);
      } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        data = await parseExcel(file);
      } else {
        throw new Error('Unsupported file format');
      }
      
      return {
        filename: file.name,
        data
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process file');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleFileUpload,
    isLoading,
    error
  };
}