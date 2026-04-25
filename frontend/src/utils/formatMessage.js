export const formatMessage = (text, sender) => {
  return {
    id: Date.now(),
    text,
    sender,
    timestamp: new Date().toISOString(),
  };
};