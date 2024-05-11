"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// const MyTasksPageCard = ({
//   eventID,
//   eventLink,
//   eventImageURL,
//   eventTitle,
//   eventDescription,
// }) => {
//   return (
//     <div className="w-10/12 mx-auto bg-white border border-color4 rounded-xl shadow-md overflow-hidden m-3">
//       <div className="md:flex">
//         <div className="md:flex-shrink-0">
//           <img
//             className="h-64 w-full object-cover md:w-64"
//             src={eventImageURL}
//             alt={eventTitle}
//           />
//         </div>
//         <div className="p-8 grid content-around">
//           <div className="uppercase tracking-wide text-2xl text-color1 font-semibold">
//             {eventTitle}
//           </div>
//           <p className="mt-2 text-color1">{eventDescription}</p>
//           <Link
//             href={`${eventLink}/${eventID}`}
//             className="bg-color3 hover:bg-color1 hover:text-color2 text-white text-center p-1 rounded-md w-40 mt-3">
//             Browse Event
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };


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

const page = () => {
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
      `http://localhost:8000/usereventdetails/${userIDDetails}`,
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

export default page;
