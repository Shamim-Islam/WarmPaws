import React, { useContext } from "react";
import { Link, NavLink } from "react-router";

import logo from "../assets/paw1.png";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="rounded-3xl hover:text-[#ff3600] mr-4 py-1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="rounded-3xl hover:text-[#ff3600] mr-4 py-1">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="rounded-3xl hover:text-[#ff3600] mr-4 py-1">
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            {" "}
            <img src={logo} alt="" className="h-10 w-10" />
            <p className="text-2xl font-bold">WarmPaws</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] mx-5 ">
          <li className="rounded-3xl hover:text-[#ff3600] mr-4 py-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="rounded-3xl hover:text-[#ff3600] mr-4 py-1">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="rounded-3xl hover:text-[#ff3600] mr-4 py-1">
            <NavLink to={"/profile"}>My Profile</NavLink>
          </li>
        </ul>
      </div>
      {user && (
        <div className="navbar-end">
          <btn
            className="btn bg-[#ff3600] rounded-2xl text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]"
            onClick={handleSignOut}
          >
            Logout
          </btn>
        </div>
      )}
      {!user && (
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn bg-[#ff3600] rounded-2xl text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
