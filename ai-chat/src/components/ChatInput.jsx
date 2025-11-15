import React from "react";
import { useState } from "react";

function ChatInput({ chatMessages, setchatMessages }) {
  const [inputText, setinputText] = useState("");
  const saveInputText = (event) => {
    setinputText(event.target.value);
  };
  const newChatMessage = [
    ...chatMessages,
    {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    },
  ];
  const sendMessage = () => {
    setchatMessages(newChatMessage);
    const response = Chatbot.getResponse(inputText);
    setchatMessages([
      ...newChatMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setinputText("");
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        onChange={saveInputText}
        value={inputText}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
