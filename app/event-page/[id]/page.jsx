import React from "react";

const page = ({ params }) => {
  const { id } = params;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <img
          className="w-full h-64 object-cover md:h-96 lg:h-screen"
          src="https://source.unsplash.com/random"
          alt="Event Banner"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Event Title
            </h1>
            <p className="mt-4 text-lg text-gray-300">Event Date</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 lg:px-8">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Event Description
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            varius sagittis est, eu posuere tortor elementum vel.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Key Events</h2>
          <ul className="mt-4 list-disc list-inside">
            <li className="mb-2">Key Event 1</li>
            <li className="mb-2">Key Event 2</li>
            <li className="mb-2">Key Event 3</li>
            <li className="mb-2">Key Event 4</li>
            <li className="mb-2">Key Event 5</li>
          </ul>
        </div>

        {/* Book Now Button */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
