import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const register = () => {
  const { registerWithEmailPassword, setUser, user, handleGoogleSignIn } =
    useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (pass.length < 6) {
      return toast.warning("Password should be minimum 6 characters.");
    }

    if (!upperCase.test(pass)) {
      return toast.warning("Need at least 1 uppercase characters");
    }

    if (!lowerCase.test(pass)) {
      return toast.warning("Need at least 1 lowercase characters");
    }

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User Registration successfull!");

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(user);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const googleSignUp = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
      })
      .catch((err) => console.log(err));
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h3 className="text-5xl font-bold">Register Now!</h3>
          <div className="border-3 border-[#ff3600] w-[100px] h-[5px] mx-auto mt-6"></div>
        </div>
        <div className="card bg-base-100 w-full max-w-[600px] shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label text-[16px] font-bold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Your Email"
                />
                <label className="label text-[16px] font-bold">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Your Full Name"
                />
                <label className="label text-[16px] font-bold">PhotoURL</label>
                <input
                  name="photoUrl"
                  type="text"
                  className="input w-full"
                  placeholder="Enter Your PhotoUrl"
                />
                <label className="label text-[16px] font-bold">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    className="btn btn-xs absolute top-2 right-3"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <div>
                  <span>Already have an account? Please </span>
                  <Link to="/login" className="text-blue-600 underline">
                    Login
                  </Link>
                </div>
                <button className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]">
                  Register
                </button>

                <button
                  className="mt-4 btn hover:bg-[#ff3600] rounded-lg hover:text-white bg-transparent text-[#ff3600] hover:border border-[#ff3600]"
                  onClick={googleSignUp}
                >
                  <FcGoogle /> SignUp With Google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
