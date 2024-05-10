"use client";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { setIsLogin, setLoginState } = useContext(AppContext);
  const [loginFormDetail, setLoginFormDetail] = useState({});

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log( loginFormDetail);
    const raw = JSON.stringify(loginFormDetail);
    

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };



    fetch("http://localhost:8000/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var ResultObj = JSON.parse(result);
        if (ResultObj.email === loginFormDetail.email) {
          window.localStorage.setItem("isUserLoggedIn", true);
          window.localStorage.setItem("username", ResultObj.username);
          setIsLogin(true);
          router.push("/");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      data-aos="fade-left"
      className="w-4/6 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Welcome Back
        </h2>
        <h6 className="mt-2 text-xl text-gray-900">
          Please Enter your details
        </h6>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {/* <div className="border-b-2 border-black my-2">
            <label htmlFor="UserName" className="sr-only">
              User Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="User Name"
              onChange={(e) => {
                setLoginFormDetail({
                  ...loginFormDetail,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div> */}

          <div className="border-b-2 border-black my-2">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => {
                setLoginFormDetail({
                  ...loginFormDetail,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>

          <div className="border-b-2 border-black my-2">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={(e) => {
                setLoginFormDetail({
                  ...loginFormDetail,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
        </div>

        {/* <div className="flex justify-end">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div> */}

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-color3 hover:bg-color1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Log in
          </button>
        </div>
      </form>
      <div className="mt-4 ">
        <span>Don't have an account? </span>
        <span>
          <button
            className="underline"
            onClick={() => {
              setLoginState((prev) => !prev);
            }}>
            Sign up
          </button>
        </span>
      </div>
    </div>
  );
};

export default Login;
