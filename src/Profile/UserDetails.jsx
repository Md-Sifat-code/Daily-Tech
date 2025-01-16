// UserDetails.jsx
import React, { useContext } from "react";

import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ok from "/astronot.png";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // New loading icon
import ViewContext from "../Contexts/View_context";

function UserDetails() {
  const { userData, loading, error } = useContext(ViewContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center text-white">
          <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  if (!userData) return <div>No user data found.</div>;

  // Fallback values in case name or posts are null
  const userName = userData.name || "User Name";
  const userPosts = userData.Posts || 0;
  const username = userData.username || "@unknown";
  const joined = userData.joined || "Unknown";
  const following = userData.following || 0;
  const followers = userData.followers || 0;

  return (
    <section className="rob border h-full">
      <div>
        {/* title part */}
        <div className="flex px-4 mt-2 items-center gap-12">
          <Link to="/home">
            <IoArrowBackCircleSharp className="text-2xl text-white" />
          </Link>
          <div>
            <h1 className="text-2xl text-white">{userName}</h1>
            <p className="text-gray-400">{userPosts} Posts</p>
          </div>
        </div>
        {/* picture part */}
        <div>
          <div className="h-[300px] w-full bg-gray-300 mt-4">
            <img src="" alt="" />
          </div>
          <div className="flex mt-[-50px] flex-row items-center justify-between px-4">
            <img
              className="h-[80px] w-[80px] rounded-full border border-blue-400"
              src={ok}
              alt=""
            />
          </div>
        </div>
        {/* info part */}
        <div>
          <div className="flex flex-row justify-start items-center gap-4 mt-4 px-4">
            {/* name part */}
            <h1 className="text-2xl text-white">{userName}</h1>
            <Link className="btn btn-sm bg-transparent text-white px-2 flex-row justify-start items-center gap-2 text-2xl font-bold border-1 hover:bg-blue-600">
              <IoCheckmarkDoneCircle />
              Get verified
            </Link>
          </div>
          {/* username */}
          <div className="flex px-4">
            <h1 className="text-gray-500">@{username}</h1>
          </div>
          {/* joined time */}
          <div className="flex mt-4 px-4">
            <p className="flex flex-row items-center gap-2 text-gray-500">
              <SlCalender />
              Joined {joined}
            </p>
          </div>
          {/* following and follower part */}
          <div className="flex mt-4 px-4 gap-4 text-white">
            <p>
              {following} <span className="text-gray-500">Following</span>
            </p>
            <p>
              {followers} <span className="text-gray-500">Followers</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
