"use client";
import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const { setLoginState } = useContext(AppContext);
  const [signUpFormDetail, setSignUpFormDetail] = useState({});

  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();

    signUpFormDetail["username"] =
      signUpFormDetail.firstname + signUpFormDetail.email;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(signUpFormDetail);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8000/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        var ResultObj = JSON.parse(result);
        if (ResultObj.message === "Signup successful!") {
          setLoginState((prev) => !prev);
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      data-aos="fade-right"
      className="w-4/6 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Create an Account
        </h2>
        <h6 className="mt-2 text-xl text-gray-900">
          Please fill in the details below
        </h6>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          <div className="flex space-x-4">
            <div className="w-1/2 border-b-2 border-black">
              <label htmlFor="firstname" className="sr-only">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                autoComplete="firstname"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                onChange={(e) => {
                  setSignUpFormDetail({
                    ...signUpFormDetail,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="w-1/2 border-b-2 border-black">
              <label htmlFor="lastname" className="sr-only">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                autoComplete="lastname"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                onChange={(e) => {
                  setSignUpFormDetail({
                    ...signUpFormDetail,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="border-b-2 border-black my-2">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => {
                setSignUpFormDetail({
                  ...signUpFormDetail,
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
              autoComplete="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={(e) => {
                setSignUpFormDetail({
                  ...signUpFormDetail,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div>
          {/* <div className="border-b-2 border-black my-2">
            <label htmlFor="re-enter-password" className="sr-only">
              Re-enter Password
            </label>
            <input
              id="re-enter-password"
              name="re-enter-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Re-enter Password"
              value={reEnterPassword}
              onChange={(e) => {
                setSignUpFormDetail({
                  ...signUpFormDetail,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </div> */}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span>
              By signing up, you agree to our Terms and Conditions Privacy
              Policy
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-color3 hover:bg-color1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign up
          </button>
        </div>
      </form>
      <div className="mt-4 ">
        <span>Already have an account? </span>
        <span>
          <button
            className="underline"
            onClick={() => {
              setLoginState((prev) => !prev);
            }}>
            Log in
          </button>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
