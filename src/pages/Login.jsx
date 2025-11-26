import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h3 className="text-5xl font-bold"> Login Now! </h3>
          <div className="border-3 border-[#ff3600] w-[100px] h-[5px] mx-auto mt-6"></div>
        </div>
        <div className="card bg-base-100 w-full max-w-[600px] shadow-2xl">
          <div className="card-body">
            <form action="">
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
