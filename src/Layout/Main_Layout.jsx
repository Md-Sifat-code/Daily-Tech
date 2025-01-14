import React from "react";
import Left_side from "../sidebars/Left_side";
import Right_side from "../sidebars/Right_side";
import { Outlet } from "react-router-dom";
import Middle from "../sidebars/Middle"; // Import the Middle component

export default function Main_Layout() {
  return (
    <section className="min-h-screen flex justify-center items-start ">
      {/* Left Sidebar (Fixed) */}
      <div className="w-[70%]">
        <div className="w-1/4 min-h-screen  text-white fixed right-0 top-0">
          <Right_side />
        </div>
        <div className="w-1/4 min-h-screen  text-white fixed left-0 top-0">
          <Left_side />
        </div>

        {/* Right Sidebar (Fixed) */}

        {/* Middle Content Area (Scrollable) */}
        <div className="w-2/4 ml-[25%] mr-[25%] min-h-screen overflow-y-auto">
          {/* Render the Middle component here */}
          <Outlet />{" "}
          {/* This will render For_you or Following based on route */}
        </div>
      </div>
    </section>
  );
}
