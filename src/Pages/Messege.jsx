import React from "react";
import Sidebar from "../Message_Component/Sidebar";
import Messeges from "../Message_Component/Messeges";

function Messege() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar section */}
      <div
        style={{ width: "30%", borderRight: "1px solid #ccc", padding: "10px" }}
      >
        <Sidebar />
      </div>

      {/* Messages section */}
      <div style={{ width: "70%", padding: "10px" }}>
        <Messeges />
      </div>
    </div>
  );
}

export default Messege;
