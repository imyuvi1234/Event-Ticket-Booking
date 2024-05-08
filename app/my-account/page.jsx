// pages/profile.js
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Your Profile
        </h2>
        <div className="flex flex-col items-center">
          <img
            src="/assets/user.svg" // Replace with the path to your profile image
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-200 mb-4"
          />
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              disabled
            />
          </div>
          <Link href="/change-password">
            <button
              type="button"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4">
              Change Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
