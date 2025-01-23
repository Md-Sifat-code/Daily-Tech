import React, { useContext, useState, useEffect } from "react";
import WebSocketContext from "../Contexts/WebSocketContext";

function Messeges() {
  const { socket } = useContext(WebSocketContext);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === "private-message") {
          setMessages((prevMessages) => [...prevMessages, data.message]);
        }
      };
    }
  }, [socket]);

  const sendMessage = () => {
    if (socket && currentMessage) {
      socket.send(
        JSON.stringify({ type: "private-message", message: currentMessage })
      );
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: currentMessage, self: true },
      ]);
      setCurrentMessage("");
    }
  };

  return (
    <div>
      <h2>Messages</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.self ? "right" : "left" }}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Messeges;
