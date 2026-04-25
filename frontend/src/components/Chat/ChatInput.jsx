import React from 'react';
import Button from '../UI/Button';

const ChatInput = ({ input, setInput, onSend }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <div className="flex p-4 border-t">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 border rounded-l focus:outline-none"
      />
      <Button onClick={onSend} className="rounded-l-none">Send</Button>
    </div>
  );
};

export default ChatInput;