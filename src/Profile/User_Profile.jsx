import React, { useContext, useState, useEffect } from "react";
import ProfileContext from "../Contexts/ProfileContext";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import ok from "/astronot.png"; // Default profile image
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // New loading icon
import { BsFillCameraFill } from "react-icons/bs"; // Camera icon for images
import { MdEdit } from "react-icons/md"; // Edit icon for images

function User_Profile() {
  const { userData, loading, error } = useContext(ProfileContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverPic, setCoverPic] = useState(null);
  const [profilpic, setProfilpic] = useState(null);
  const [fullname, setFullname] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (userData && userData.length > 0) {
      const user = userData[0];
      setFullname(user.fullname || "");
      setBio(user.bio || "");
      setPhone(user.phone || "");
      setProfession(user.profession || "");
      setAddress(user.address || "");
    }
  }, [userData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === "cover") {
        setCoverPic(file);
      } else if (type === "profile") {
        setProfilpic(file);
      }
    }
  };

  const handleSaveChanges = async () => {
    if (!userData || !Array.isArray(userData) || userData.length === 0) {
      console.error("User data is missing or invalid.");
      alert("Error: User data is missing or invalid.");
      return;
    }

    const user = userData[0];
    if (!user?.id) {
      console.error("User ID is missing.");
      alert("Error: User ID is missing.");
      return;
    }

    const formData = new FormData();
    formData.append("id", user.id);
    formData.append("fullname", fullname || "");
    formData.append("bio", bio || "");
    formData.append("phone", phone || "");
    formData.append("profession", profession || "");
    formData.append("address", address || "");

    if (coverPic) {
      formData.append("coverPic", coverPic);
    }
    if (profilpic) {
      formData.append("profilpic", profilpic);
    }

    try {
      const response = await fetch(
        "https://dailytech.onrender.com/User/update",
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        closeModal();
      } else {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData);
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Failed to update profile due to a network issue.");
    }
  };

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

  const userName = userData[0]?.fullname || "MD SIFAT";
  const userPosts = userData[0]?.Posts || 0;
  const username = userData[0]?.username || "@unknown";
  const joined = userData[0]?.joined || "Unknown";
  const following = userData[0]?.following || 0;
  const followers = userData[0]?.followers || 0;

  return (
    <section className="rob overflow-y-hidden  h-full">
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
            <img
              src={
                coverPic
                  ? URL.createObjectURL(coverPic)
                  : userData[0]?.coverPicture || ""
              }
              alt="Banner"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex mt-[-50px] flex-row items-center justify-between px-4">
            <div className="relative">
              <img
                className="h-[80px] w-[80px] rounded-full border border-blue-400"
                src={
                  profilpic
                    ? URL.createObjectURL(profilpic)
                    : userData[0]?.profilpic || ok
                }
                alt="Profile"
              />
              <label className="absolute bottom-0 right-0">
                <MdEdit className="text-white cursor-pointer text-2xl" />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "profile")}
                />
              </label>
            </div>
            <button
              className="btn mt-4 btn-sm px-6 border-[1px] bg-blue-600 text-white border-white font-bold hover:bg-blue-800"
              onClick={openModal}
            >
              Edit profile
            </button>
          </div>
        </div>
        {/* info part */}
        <div>
          <div className="flex flex-row justify-start items-center gap-4 mt-4 px-4">
            <h1 className="text-2xl text-white">{userName}</h1>
            <Link className="btn btn-sm bg-transparent text-white px-2 flex-row justify-start items-center gap-2 text-2xl font-bold border-1 hover:bg-blue-600">
              <IoCheckmarkDoneCircle />
              Get verified
            </Link>
          </div>
          <div className="flex px-4">
            <h1 className="text-gray-500">@{username}</h1>
          </div>
          <div className="flex mt-4 px-4">
            <p className="flex flex-row items-center gap-2 text-gray-500">
              <SlCalender />
              Joined {joined}
            </p>
          </div>
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

      {/* Modal for editing profile */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-full w-96 sm:w-80 md:w-96 lg:w-[500px]">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

            {/* Banner photo */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Banner Photo
              </label>
              <div className="relative">
                <img
                  src={
                    coverPic
                      ? URL.createObjectURL(coverPic)
                      : userData[0]?.coverPicture || "default-banner.png"
                  }
                  alt="Banner"
                  className="w-full h-40 object-cover mt-2 rounded-md"
                />
                <label className="absolute top-2 right-2">
                  <BsFillCameraFill className="text-blue-600 cursor-pointer text-2xl" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "cover")}
                  />
                </label>
              </div>
            </div>

            {/* Profile picture */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <div className="relative">
                <img
                  src={
                    profilpic
                      ? URL.createObjectURL(profilpic)
                      : userData[0]?.profilpic || ok
                  }
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-blue-500 mt-2"
                />
                <label className="absolute bottom-0 right-0">
                  <BsFillCameraFill className="text-black cursor-pointer text-2xl" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "profile")}
                  />
                </label>
              </div>
            </div>

            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Profession
              </label>
              <input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="text-gray-500 font-semibold py-2 px-4"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default User_Profile;
