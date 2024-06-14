import React from "react";
import { Link } from "react-router-dom";
const EventCard = ({ event }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className={`w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md`}
        >
            <img
                src={event?.image ? event?.image : "https://i.ibb.co/x1Kc5d3/cover.png"}
                alt="event"
                className="w-full h-full rounded-lg"
            />
        </div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {event?.title} <br /> <mark>(${event?.price})</mark>
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {event?.date}
            </span>
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {event?.time}
            </span>
          </div>
          <div className="flex items-center justify-center px-3 py-2 dark:bg-gray-700">
            <Link to={`/eventDetails/${event?._id}`}>
              <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
