export async function parseCSV(file: File): Promise<Array<Record<string, any>>> {
  const text = await file.text();
  const lines = text.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      const values = line.split(',').map(v => v.trim());
      return headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {} as Record<string, any>);
    });
}

export async function parseExcel(file: File): Promise<Array<Record<string, any>>> {
  // For now, return empty array as Excel parsing requires additional libraries
  // TODO: Implement Excel parsing
  return [];
}