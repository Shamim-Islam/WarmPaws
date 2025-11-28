import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateProfile = (e) => { 
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setUser({...user,photoURL:photoUrl, displayName:name})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-[150px]">
      <div className="avatar flex flex-col items-center justify-center">
        <div className="w-44 rounded-full border-3 border-[#ff3600]">
          <img src={user?.photoURL} className="" />
        </div>
        <p className="text-3xl my-5">{user?.displayName}</p>
        <p>{user?.email}</p> <br />
        <button
          className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]"
          onClick={handleOpenForm}
        >
          Update Profile
        </button>
        {isOpen && (
          <form
            onSubmit={handleUpdateProfile}
            className="grid w-[350px] gap-3 mt-8 border border-[#ff3600] rounded-xl p-6"
          >
            <label className="label text-[16px] font-bold">Name</label>
            <input
              defaultValue={user?.displayName}
              name="name"
              type="text"
              className="input w-full"
              placeholder="Your Name"
            />
            <label className="label text-[16px] font-bold">PhotoURL</label>
            <input
              defaultValue={user?.photoURL}
              name="photoUrl"
              type="text"
              className="input w-full"
              placeholder="Your PhotoUrl"
            />

            <button className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]">
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
