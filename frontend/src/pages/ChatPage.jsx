import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../context/ChatContext';
import ChatWindow from '../components/Chat/ChatWindow';
import ChatInput from '../components/Chat/ChatInput';
import { useChatHook } from '../hooks/useChat';
import Button from '../components/UI/Button';

const ChatPage = () => {
  const { messages, user, isTyping, logout } = useChat();
  const { input, setInput, handleSendMessage } = useChatHook();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl">Chatbot</h1>
        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">Logout</Button>
      </header>
      <ChatWindow messages={messages} isTyping={isTyping} />
      <ChatInput input={input} setInput={setInput} onSend={handleSendMessage} />
    </div>
  );
};

export default ChatPage;