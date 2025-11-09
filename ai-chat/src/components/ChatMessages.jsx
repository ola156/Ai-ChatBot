import React from "react";
import ChatMessage from "./ChatMessage";

function ChatMessages() {
  const chatMessages = [
    {
      message: "Hello Chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "Hello! can i get the date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Yes! October 5th",
      sender: "robot",
      id: "id4",
    },
  ];
  return (
    <>
      {chatMessages.map(({ message, sender, id }) => {
        return <ChatMessage key={id} message={message} sender={sender} />;
      })}
    </>
  );
}

export default ChatMessages;
