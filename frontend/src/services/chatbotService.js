import { apiRequest } from './api';

export const sendMessage = async (message) => {
  // For now, simulate a response. In a real app, call the backend API.
  // Assuming backend has /api/chat or something, but since not, simulate.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        text: `Echo: ${message}`,
        sender: 'bot'
      });
    }, 1000);
  });
};

// If backend has chat endpoint, use:
// export const sendMessage = async (message) => {
//   return apiRequest('/chat', {
//     method: 'POST',
//     body: JSON.stringify({ message }),
//   });
// };