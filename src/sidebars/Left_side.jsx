// Left_side.jsx
import React, { useContext } from "react";
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
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileContext from "../Contexts/ProfileContext"; // Import ProfileContext

export default function Left_side() {
  // Get username and email from sessionStorage
  const username = sessionStorage.getItem("username") || "Md sifat Bin jibon"; // Default if not found
  const email = sessionStorage.getItem("email") || "@code-siffat"; // Default if not found

  const { fetchUserData } = useContext(ProfileContext); // Get fetchUserData from context

  // Function to handle Profile button click
  const handleProfileClick = () => {
    fetchUserData(); // Trigger the API request when the profile button is clicked
  };

  return (
    <section className=" border-r-[1px] border-gray-400">
      <div className="flex flex-col items-center justify-center h-full">
        {/* Header */}
        <div>
          <h1 className="text-3xl rob mt-2 font-bold text-center text-white">
            Daily<span className="textcol text-3xl font-extrabold">Tech</span>
          </h1>
        </div>

        {/* Navigation Icons */}
        <div className="w-full rob justify-around flex h-[800px] flex-col items-start px-6 mt-10 text-white robo">
          <Link
            to="/home"
            className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0"
          >
            <MdHomeFilled />
            <span className="hidden lg:block">Home</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoSearchSharp />
            <span className="hidden lg:block">Explore</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <FaBell />
            <span className="hidden lg:block">Notifications</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoMailOutline />
            <span className="hidden lg:block">Messages</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoBookmarkSharp />
            <span className="hidden lg:block">Bookmarks</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <PiHandbagSimpleBold />
            <span className="hidden lg:block">Jobs</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <BsPeopleFill />
            <span className="hidden lg:block">Communities</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <RiVipCrown2Fill />
            <span className="hidden lg:block">Premium</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <IoCheckmarkDoneCircleSharp />
            <span className="hidden lg:block">Get verified</span>
          </Link>

          {/* Profile Button */}
          <Link
            to={`/home/${username}`} // Navigate to the user profile page
            onClick={handleProfileClick} // Trigger the API request when clicked
            className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0"
          >
            <LuUserRound />
            <span className="hidden lg:block">Profile</span>
          </Link>

          <Link className="flex btn bg-transparent text-white hover:bg-transparent hover:border-2 hover:border-white px-6 flex-row justify-start items-center gap-6 text-2xl font-bold border-0">
            <CgMoreO />
            <span className="hidden lg:block">More</span>
          </Link>

          {/* Post Button */}
          <p className="btn w-full bg-white border-none rounded-full mb-2 text-black font-bold robo text-2xl">
            Post
          </p>
        </div>

        {/* User Info */}
        <div className="flex flex-col lg:flex-row items-center justify-start gap-4 robo">
          <p className="text-white rounded-full bg-purple-800 text-2xl p-2">
            <FaUser className="rounded-full bg-purple-800" />
          </p>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start text-white mt-2">
            <p>{username}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
