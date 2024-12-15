import { useState } from 'react';
import { DataFile } from '../types';
import { parseFile } from '../utils/file-parsers';
import { isValidFileType } from '../utils/file-validators';

export function useFileHandler() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (files: File[]): Promise<void> => {
    if (!files || files.length === 0) {
      setError('No files selected');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const file = files[0]; // Handle first file for now
      
      if (!isValidFileType(file)) {
        throw new Error('Unsupported file format');
      }

      const parsedData = await parseFile(file);
      
      // Handle the parsed data here
      console.log('Parsed data:', parsedData);
      
      return parsedData;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process file';
      setError(errorMessage);
      throw new Error(errorMessage);
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