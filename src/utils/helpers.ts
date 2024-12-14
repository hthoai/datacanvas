export const generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const formatDate = (timestamp: number) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp));
};