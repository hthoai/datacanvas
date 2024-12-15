import React from 'react';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { ACCEPTED_FILE_TYPES } from '../../constants/file-types';

interface FileUploadButtonProps {
  onFileUpload: (files: File[]) => void;
  className?: string;
}

export function FileUploadButton({ onFileUpload, className }: FileUploadButtonProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ACCEPTED_FILE_TYPES,
    onDrop: onFileUpload,
    multiple: false
  });

  return (
    <div {...getRootProps()} className={className}>
      <input {...getInputProps()} />
      <Upload className="w-5 h-5 text-gray-400" />
    </div>
  );
}