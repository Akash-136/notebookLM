import React from 'react';
import AppRoutes from './routes';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ChatProvider>
      <AppRoutes />
    </ChatProvider>
  );
}

export default App;