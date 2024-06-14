import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.config";
const EventCard = ({ event }) => {
  const [user, loading] = useAuthState(auth);
  const [isPaid, setIsPaid] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("token");

  // fetch all pay ments and check if user and event._id if match with any payment[index].email && .eventID then show cancel booking button
  useEffect(() => {
    try {
      const loadPayments = async () => {
        axios
          .get("https://bookevents-server.onrender.com/api/v1/payments", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            res.data.forEach((payment) => {
              if (
                payment?.email === user?.email &&
                payment?.eventID === event?._id
              ) {
                setIsPaid(true);
              }
            });
          })
          .catch((err) => {
            console.log(err);
          });
      };
      loadPayments();
    } catch (error) {
      console.log(error);
    }
  }, [event._id, token, user?.email]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className={`w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md`}
        >
          <img
            src={
              event?.image ? event?.image : "https://i.ibb.co/x1Kc5d3/cover.png"
            }
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
            {
              // if location.pathname includes '/my-events' then show a button to redirect to payment page holding id or show see details button
              location.pathname.includes("/my-events") && isPaid == false ? (
                <>
                  {event?.price != 0 && (
                    <Link to={`/payment/${event?._id}`}>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none mx-2">
                        Pay <br /> Now
                      </button>
                    </Link>
                  )}
                  <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded hover:bg-red-700 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-red-600 focus:outline-none mx-2">
                    Cancel <br /> Booking
                  </button>
                </>
              ) : (
                <Link to={`/eventDetails/${event?._id}`}>
                  <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                    See Details
                  </button>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
