"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const MyTasksPageCard = ({
  event_id,
  event_date,
  eventImageURL,
  event_title,
  event_description,
}) => {
  return (
    <div className="w-10/12 mx-auto bg-white border border-color4 rounded-xl shadow-md overflow-hidden m-3">
      <div className="md:flex">
        <div className="md:flex-shrink-0 p-8">
          <Image
            className="h-64 w-full object-cover md:w-64 rounded-lg"
            src="/assets/event1.jpg"
            alt={event_title}
            height={64}
            width={960}
          />
        </div>
        <div className="p-8 grid content-around">
          <div className="uppercase tracking-wide text-2xl text-color1 font-semibold">
            {event_title}
          </div>
          <p className="text-color2">{event_date}</p>
          <p className="mt-2 text-color1">{event_description}</p>
          <Link
            href={`/event-page/${event_id}`}
            className="bg-color3 hover:bg-color1 hover:text-color2 text-white text-center p-1 rounded-md w-40 mt-3">
            Browse Event
          </Link>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [loading, setLoading] = useState(false);

  const userIDDetails =
    typeof window !== "undefined"
      ? window.localStorage.getItem("userid")
      : null;

  const [myTasksPageCardDetails, setMyTasksPageCardDetails] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://ticketing-backend-iiyn.onrender.com/usereventdetails/${userIDDetails}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const ResultObj = JSON.parse(result);
        console.log(ResultObj);
        setMyTasksPageCardDetails(ResultObj);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-color1 text-center my-[3rem] underline">
            My Events
          </h1>
          <div className="flex flex-col w-full">
            {myTasksPageCardDetails.map((event, index) => (
              <MyTasksPageCard key={index} {...event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
