import { DataFile } from '../types';
import { ACCEPTED_FILE_TYPES } from '../constants/file-types';

export async function parseFile(file: File): Promise<DataFile> {
  if (file.name.endsWith('.csv')) {
    return parseCSV(file);
  } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
    return parseExcel(file);
  }
  throw new Error('Unsupported file format');
}

async function parseCSV(file: File): Promise<DataFile> {
  try {
    const text = await file.text();
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    const data = lines.slice(1)
      .filter(line => line.trim())
      .map(line => {
        const values = line.split(',').map(v => v.trim());
        return headers.reduce((obj, header, i) => {
          obj[header] = values[i];
          return obj;
        }, {} as Record<string, any>);
      });

    return {
      filename: file.name,
      data
    };
  } catch (error) {
    throw new Error('Failed to parse CSV file');
  }
}

async function parseExcel(file: File): Promise<DataFile> {
  // For now, return empty data as Excel parsing requires additional libraries
  return {
    filename: file.name,
    data: []
  };
}