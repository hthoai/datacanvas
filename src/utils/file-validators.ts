import { ACCEPTED_FILE_TYPES, ACCEPTED_FILE_EXTENSIONS } from '../constants/file-types';

export function isValidFileType(file: File): boolean {
  if (!file) return false;
  
  const extension = getFileExtension(file.name).toLowerCase();
  return ACCEPTED_FILE_EXTENSIONS.includes(`.${extension}`);
}

export function getFileExtension(filename: string): string {
  return filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2);
}