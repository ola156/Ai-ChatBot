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
    <div>
      {sender === "robot" && <img src={robot} alt="profile_img" width={50} />}
      {message}
      {sender === "user" && <img src={user} alt="profile_img" width={50} />}
    </div>
  );
}

export default ChatMessage;
