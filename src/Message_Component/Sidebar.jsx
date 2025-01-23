import React, { useContext, useState, useEffect } from "react";
import WebSocketContext from "../Contexts/WebSocketContext"; // Default import
import ViewContext from "../Contexts/View_context";

function Sidebar() {
  const { socket } = useContext(WebSocketContext);
  const { userData } = useContext(ViewContext);
  const [connectedUsers, setConnectedUsers] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === "user-list") {
          setConnectedUsers(data.users); // List of connected users from the server
        }
      };
    }
  }, [socket]);

  const handleUserClick = (username) => {
    socket.send(JSON.stringify({ type: "connect-user", target: username }));
  };

  return (
    <div>
      <h2>Connected Users</h2>
      <ul>
        {connectedUsers.map((user) => (
          <li key={user}>
            <button onClick={() => handleUserClick(user)}>{user}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
