import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoBookmarkSharp } from "react-icons/io5";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { RiVipCrown2Fill } from "react-icons/ri";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";
export default function Left_side() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-full">
        {/* a;; icons part */}
        <div>
          <h1 className="text-3xl rob mt-2 font-bold text-center text-white">
            Daily<span className="textcol text-3xl font-extrabold">Tech</span>
          </h1>
        </div>
        {/* icons */}
        <div
          className="w-full justify-around flex h-[800px] border flex-col items-start px-6
          mt-10 text-white robo "
        >
          <p>
            <MdHomeFilled />
            Home
          </p>
          <p>
            <IoSearchSharp />
          </p>
          <p>
            <FaBell />
          </p>
          <p>
            <IoMailOutline />
          </p>
          <p>
            <IoBookmarkSharp />
          </p>
          <p>
            <PiHandbagSimpleBold />
          </p>
          <p>
            <BsPeopleFill />
          </p>
          <p>
            <RiVipCrown2Fill />
          </p>
          <p>
            <IoCheckmarkDoneCircleSharp />
          </p>
          <p>
            <LuUserRound />
          </p>
          <p>
            <CgMoreO />
          </p>
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
