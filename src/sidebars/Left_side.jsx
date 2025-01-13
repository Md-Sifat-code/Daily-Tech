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
          className="w-full rob justify-around flex h-[800px] border flex-col items-start px-6
          mt-10 text-white robo "
        >
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <MdHomeFilled />
            Home
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <IoSearchSharp />
            Explore
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <FaBell />
            Notifications
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <IoMailOutline />
            Messages
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <IoBookmarkSharp />
            Bookmarks
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <PiHandbagSimpleBold />
            Jobs
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <BsPeopleFill />
            Communities
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <RiVipCrown2Fill />
            Premium
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <IoCheckmarkDoneCircleSharp />
            Get verified
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <LuUserRound />
            Profile
          </p>
          <p className="flex flex-row justify-start items-center gap-6 text-3xl font-bold">
            <CgMoreO />
            More
          </p>
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
