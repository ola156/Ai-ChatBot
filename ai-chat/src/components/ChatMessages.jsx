import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    console.log("v");
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(({ message, sender, id }) => {
        return <ChatMessage key={id} message={message} sender={sender} />;
      })}
    </div>
  );
}

export default ChatMessages;
