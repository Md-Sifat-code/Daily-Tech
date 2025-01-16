import React from "react";
import Left_side from "../sidebars/Left_side";
import Right_side from "../sidebars/Right_side";
import { Outlet } from "react-router-dom";
import Middle from "../sidebars/Middle"; // Import the Middle component

export default function Main_Layout() {
  return (
    <section className="min-h-screen bg-[#111827] flex">
      {/* Left Sidebar (Hidden on mobile and md devices) */}
      <div className="w-[20%] hidden lg:block fixed top-0 left-0 h-full">
        <Left_side />
      </div>

      {/* Right Sidebar (Hidden on mobile and md devices) */}
      <div className="w-[20%] hidden lg:block fixed top-0 right-0 h-full">
        <Right_side />
      </div>

      {/* Middle Content Area (Scrollable, full width on mobile and md devices) */}
      <div className="flex-1  min-h-screen overflow-y-auto sm:ml-0 sm:mr-0 sm:w-full lg:ml-[20%] lg:mr-[20%]">
        {/* Render the Middle component here */}
        <Outlet />
        {/* This will render For_you or Following based on the route */}
      </div>
    </section>
  );
}
