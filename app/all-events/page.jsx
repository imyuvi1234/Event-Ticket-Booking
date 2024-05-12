"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllTasksPageCard = ({
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
          <img
            className="h-64 w-full object-cover md:w-64 rounded-lg"
            src="https://source.unsplash.com/random"
            alt={event_title}
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
  const [allTasksPageCardDetails, setAllTasksPageCardDetails] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://ticketing-backend-iiyn.onrender.com/alleventdetails",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setAllTasksPageCardDetails(JSON.parse(result));
        console.log(allTasksPageCardDetails);
      })
      .catch((error) => console.error(error));
  }, []);

  // const allTasksPageCardDetails = [
  //   {
  //     eventID: 1,
  //     eventTitle: "Event 1",
  //     eventDescription:
  //       "Event 1 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event1.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 2,
  //     eventTitle: "Event 2",
  //     eventDescription:
  //       "Event 2 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event2.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 3,
  //     eventTitle: "Event 3",
  //     eventDescription:
  //       "Event 3 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event3.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 4,
  //     eventTitle: "Event 4",
  //     eventDescription:
  //       "Event 4 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event1.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 5,
  //     eventTitle: "Event 5",
  //     eventDescription:
  //       "Event 5 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event2.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 6,
  //     eventTitle: "Event 6",
  //     eventDescription:
  //       "Event 6 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event3.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 7,
  //     eventTitle: "Event 7",
  //     eventDescription:
  //       "Event 7 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event1.jpg",
  //     eventLink: "/event-page",
  //   },
  //   {
  //     eventID: 8,
  //     eventTitle: "Event 8",
  //     eventDescription:
  //       "Event 8 Description and some more text to make it look like a description.",
  //     eventImageURL: "/assets/event2.jpg",
  //     eventLink: "/event-page",
  //   },
  // ];

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-color1 text-center my-[3rem] underline">
            All Events
          </h1>
          <div className="flex flex-col w-full">
            {allTasksPageCardDetails.map((event, index) => (
              <AllTasksPageCard key={index} {...event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
