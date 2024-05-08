"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";

const EventCardsHomaPage = ({
  eventId,
  image,
  eventLink,
  eventName,
  eventDescription,
}) => {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
      <a href={eventLink}>
        <img class="rounded-t-lg" src={image} alt="" />
      </a>
      <div class="p-5">
        <a href={eventLink}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {eventName}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {eventDescription}
        </p>
        <Link
          href={`${eventLink}/${eventId}`}
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white hover:text-color2 bg-color3 rounded-lg hover:bg-color1 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Browse Event
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  const eventCardsHomaPageDetails = [
    {
      eventId: 1,
      eventName: "Event 1",
      eventDescription: "Some Description for Event 1",
      image: "/assets/event1.jpg",
      eventLink: "/event-page",
    },
    {
      eventId: 1,
      eventName: "Event 2",
      eventDescription: "Some Description for Event 2",
      image: "/assets/event2.jpg",
      eventLink: "/event-page",
    },
    {
      eventId: 1,
      eventName: "Event 3",
      eventDescription: "Some Description for Event 3",
      image: "/assets/event3.jpg",
      eventLink: "/event-page",
    },
  ];
  return (
    <section className="container mx-auto p-5">
      <div
        id="carouselExampleCrossfade"
        className="relative lg:w-10/12  mx-auto bg-gray-100 rounded-lg shadow-2xl"
        data-twe-carousel-init
        data-twe-ride="carousel">
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators>
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to="0"
            data-twe-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to="1"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-twe-target="#carouselExampleCrossfade"
            data-twe-slide-to="2"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"></button>
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade
            data-twe-carousel-item
            data-twe-carousel-active>
            <img
              src="/assets/event1.jpg"
              className="block w-full h-full object-contain rounded-lg"
              alt="Wild Landscape"
            />
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade
            data-twe-carousel-item>
            <img
              src="/assets/event2.jpg"
              className="block w-full h-full object-contain rounded-lg"
              alt="Camera"
            />
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-fade
            data-twe-carousel-item>
            <img
              src="/assets/event3.jpg"
              className="block w-full h-full object-contain rounded-lg"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide="prev">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide="next">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
      <div className="my-[5rem]">
        <div className="bg-color4 lg:w-10/12 mx-auto rounded-md">
          <p class="text-5xl text-center font-bold text-color1 py-5 pt-[4rem]">
            {" "}
            <span>Main </span>
            <br className="sm:hidden h-5" />
            <span>Event</span>
          </p>
          <p class="text-lg text-center text-color2 underline">14th May 2024</p>
          <p class="text-sm text-center text-color1 underline">Mark the Date</p>
          <p class="text-md p-5">
            {" "}
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-4/6 p-2">
              <div className="bg-white rounded-lg py-5">
                <p className="text-center text-lg font-bold">Key Events</p>
                <div className="flex flex-wrap justify-around">
                  <ul className="list-disc p-5">
                    <li className="break-words">Event 1</li>
                    <li>Event 2</li>
                    <li>Event 3</li>
                    <li>Event 4</li>
                  </ul>
                  <ul className="list-disc p-5">
                    <li>Event 1</li>
                    <li>Event 2</li>
                    <li>Event 3</li>
                    <li>Event 4</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/6 p-2">
              <div className="bg-white rounded-lg py-[3rem]">
                <p className="text-center text-lg">Book your tickets now</p>
                <div className="flex justify-center my-5">
                  <Link
                    href="/booking-page/1"
                    className="bg-color3 hover:bg-color1 hover:text-color2 text-white p-2 rounded-md w-1/2">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around">
        {eventCardsHomaPageDetails.map((eventCard, index) => (
          <EventCardsHomaPage key={index} {...eventCard} />
        ))}
      </div>
    </section>
  );
}
