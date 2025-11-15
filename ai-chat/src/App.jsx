import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setchatMessages] = useState([
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
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setchatMessages={setchatMessages}
      />
    </div>
  );
}

export default App;
