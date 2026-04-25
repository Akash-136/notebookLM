import { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { sendMessage } from '../services/chatbotService';
import { formatMessage } from '../utils/formatMessage';

export const useChatHook = () => {
  const { addMessage, setIsTyping } = useChat();
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = formatMessage(input, 'user');
    addMessage(userMessage);
    setInput('');

    setIsTyping(true);
    try {
      const response = await sendMessage(input);
      const botMessage = formatMessage(response.text, 'bot');
      addMessage(botMessage);
    } catch (error) {
      const errorMessage = formatMessage('Sorry, something went wrong.', 'bot');
      addMessage(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  return {
    input,
    setInput,
    handleSendMessage,
  };
};