import React from "react";
import Left_side from "../sidebars/Left_side";
import Right_side from "../sidebars/Right_side";
import { Outlet } from "react-router-dom";
import Middle from "../sidebars/Middle"; // Import the Middle component

export default function Main_Layout() {
  return (
    <section className="min-h-screen bg-[#111827]  flex">
      {/* Left Sidebar (Fixed) */}
      <div className="w-[20%] fixed top-0 left-0 h-full ">
        <Left_side />
      </div>

      {/* Right Sidebar (Fixed) */}
      <div className="w-[20%] fixed top-0 right-0 h-full ">
        <Right_side />
      </div>

      {/* Middle Content Area (Scrollable) */}
      <div className="flex-1 ml-[20%] mr-[20%] min-h-screen overflow-y-auto">
        {/* Render the Middle component here */}
        <Outlet />
        {/* This will render For_you or Following based on the route */}
      </div>
    </section>
  );
}
