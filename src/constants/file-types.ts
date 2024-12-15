export const ACCEPTED_FILE_TYPES = {
  'text/csv': ['.csv'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
  'application/vnd.ms-excel': ['.xls'],
  // Add more file types as needed
} as const;

export const ACCEPTED_FILE_EXTENSIONS = ['.csv', '.xlsx', '.xls'];