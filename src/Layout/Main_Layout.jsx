import React from "react";
import Left_side from "../sidebars/Left_side";
import Right_side from "../sidebars/Right_side";
import { Outlet } from "react-router-dom";
import Middle from "../sidebars/Middle"; // Import the Middle component

export default function Main_Layout() {
  return (
    <section className="min-h-screen flex justify-center">
      <div className="border w-[70%] grid grid-cols-4">
        <div>
          <Right_side />
        </div>

        <div className="col-span-2 border">
          {/* Render the Middle component here */}
          <Outlet />{" "}
          {/* This will render For_you or Following based on route */}
        </div>

        <div>
          <Left_side />
        </div>
      </div>
    </section>
  );
}
