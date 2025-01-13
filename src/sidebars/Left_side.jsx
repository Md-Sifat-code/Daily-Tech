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
import { Link } from "react-router-dom";
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
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <MdHomeFilled />
            Home
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoSearchSharp />
            Explore
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <FaBell />
            Notifications
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoMailOutline />
            Messages
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoBookmarkSharp />
            Bookmarks
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <PiHandbagSimpleBold />
            Jobs
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <BsPeopleFill />
            Communities
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <RiVipCrown2Fill />
            Premium
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoCheckmarkDoneCircleSharp />
            Get verified
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <LuUserRound />
            Profile
          </Link>
          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <CgMoreO />
            More
          </Link>

          <p className="btn w-full bg-white border-none rounded-full mb-2 text-black font-bold robo text-2xl">
            Post
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
}
