import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const register = () => {
  const { registerWithEmailPassword, setUser, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(user)
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(user)

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
                <input
                  name="password"
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />
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
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
