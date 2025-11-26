import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="my-[200px]">
      <div className="avatar flex flex-col items-center justify-center">
        <div className="w-24 rounded-full">
          <img src={user?.photoURL} className="" />
        </div>
        <p className="text-3xl my-5">{user?.displayName}</p>
        <p>{user?.email}</p>
        <button className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
