import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setchatMessages] = useState([
    {
      message: "Hi! How can I help you?",
      sender: "robot",
      id: "id2",
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
