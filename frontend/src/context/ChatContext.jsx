import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setMessages([]);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  return (
    <ChatContext.Provider value={{
      messages,
      user,
      token,
      isTyping,
      setIsTyping,
      addMessage,
      login,
      logout
    }}>
      {children}
    </ChatContext.Provider>
  );
};