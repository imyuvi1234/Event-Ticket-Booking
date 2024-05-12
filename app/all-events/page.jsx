"use client";
import EventDisplayCard from "@/components/eventDisplayCard";
import React, { useEffect, useState } from "react";


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
        const ResultObj = JSON.parse(result);
        setAllTasksPageCardDetails(ResultObj);
        console.log(ResultObj);
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
        <div className="bg-color3">
          <h1 className="text-3xl font-bold pb-4 text-color2 text-center py-[3rem] underline">
            All Events
          </h1>
          <div className="flex flex-col w-full p-4">
            {allTasksPageCardDetails.map((event, index) => (
              <EventDisplayCard key={index} {...event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
