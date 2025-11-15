import React from "react";
import user from "../assets/user.png";
import robot from "../assets/robot.png";

function ChatMessage({ message, sender }) {
  /* if (sender === "user") {
    return (
      <div>
        {message}
        <img src={user} alt="profile_img" width={50} />
      </div>
    );
  } else if (sender === "robot") {
    return (
      <div>
        <img src={robot} alt="profile_img" width={50} />
        {message}
      </div>
    );
  }*/

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={robot} alt="profile_img" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={user} alt="profile_img" className="chat-message-profile" />
      )}
    </div>
  );
}

export default ChatMessage;
