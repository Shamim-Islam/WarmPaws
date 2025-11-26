import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router";
import auth from "../firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { setUser, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(user);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h3 className="text-5xl font-bold"> Login Now! </h3>
          <div className="border-3 border-[#ff3600] w-[100px] h-[5px] mx-auto mt-6"></div>
        </div>
        <div className="card bg-base-100 w-full max-w-[600px] shadow-2xl">
          <div className="card-body">
            <form action="" onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label text-[16px] font-bold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Your Email"
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
                  <span>Dont have any account? Please </span>
                  <Link to="/register" className="text-blue-600 underline">
                    register
                  </Link>
                </div>
                <button className="mt-4 btn bg-[#ff3600] rounded-lg text-white hover:bg-transparent hover:text-[#ff3600] hover:border border-[#ff3600]">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
