import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SectionHeadline from "../shared/SectionHeadline";
import BookingSummCard from "./BookingSummCard";
import Breadcrumbs from "./Breadcrumbs";

const EventDetails = () => {
  const {id}= useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({}); //[event,setEvent
  const eventDemo = {
    _id: 1,
    title: "Event Title",
    date: "12/12/21",
    time: "12:00 PM",
    location: "Event Location",
    price: 1000,
    description: "Event Description",
    image: "https://i.ibb.co/x1Kc5d3/cover.png",
    bookings: [
      { name: "John Doe", email: "dff", phone: "1234567890" },
      { name: "Jane Doe", email: "dff", phone: "1234567890" },
      { name: "John Doe", email: "dff", phone: "1234567890" },
    ],
  };
  useEffect(() => {
    setEvent(eventDemo);
  }, []);

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    console.log(username);
    const isConfirmed = confirm("Are you sure you want to book this event?");
    if (isConfirmed) {
      if (!event?.price) {
        alert("Booking Confirmed!");
      } else if (event?.price) {
        alert(`Booking Confirmed! You will be charged ${event?.price}`);
        navigate(`/payment/${event?._id}`);
      }
    } else {
      alert("Booking Cancelled!");
    }

    // close the modal
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <Breadcrumbs pageName={`Event Details / ${event?._id}`} />
      <SectionHeadline
        secTitle="Event Details"
        secSubTitle="Check out the event details"
      />
      <div
        className="grid md:grid-cols-12 gap-4 
      "
      >
        <section
          className="text-gray-600 body-font 
         md:col-start-1 md:col-end-10"
        >
          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                  {event?.title}
                </h1>
                <div className="leading-relaxed my-4">{event?.description}</div>
                <div className="leading-relaxed">
                  Price: <strong>{event?.price ? event?.price : "Free"}</strong>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {event?.bookings?.length}
                </h2>
                <p className="leading-relaxed">Bookings</p>
              </div>
              <div className="p-4 sm:w-1/2 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Graduates</p>
              </div>
              <div className="p-4 sm:w-1/2 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Successful</p>
              </div>
              <div className="p-4 sm:w-1/2 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Certified</p>
              </div>
              <div className="w-full">
                <div className="flex items-center justify-center my-8">
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}

                  <button
                    type="submit"
                    className="text-white py-2 px-4 uppercase rounded bg-green-600 hover:bg-lime-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    {" "}
                    Book Now{" "}
                  </button>

                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Book Your Ticket!</h3>
                      <p className="py-4">
                        <>
                          <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                            <h2 className="text-lg font-semibold text-gray-500 capitalize dark:text-white">
                              Booking Details
                            </h2>

                            <form
                              //   method="dialog"
                              onSubmit={handleConfirmBooking}
                            >
                              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                  <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="username"
                                  >
                                    Username
                                  </label>
                                  <input
                                    id="username"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </div>

                                <div>
                                  <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="emailAddress"
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    id="emailAddress"
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </div>

                                <div>
                                  <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="password"
                                  >
                                    Password
                                  </label>
                                  <input
                                    id="password"
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </div>

                                <div>
                                  <label
                                    className="text-gray-700 dark:text-gray-200"
                                    htmlFor="passwordConfirmation"
                                  >
                                    Password Confirmation
                                  </label>
                                  <input
                                    id="passwordConfirmation"
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                  />
                                </div>
                              </div>

                              <div className="flex justify-end mt-6">
                                <button
                                  type="submit"
                                  className="text-white py-2 px-4 uppercase rounded bg-green-600 hover:bg-lime-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                  onClick={() =>
                                    document
                                      .getElementById("my_modal_3")
                                      .showModal()
                                  }
                                >
                                  {" "}
                                  Confirm Booking{" "}
                                </button>
                              </div>
                            </form>
                          </section>
                        </>
                      </p>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src={
                  event?.image
                    ? event?.image
                    : "https://i.ibb.co/x1Kc5d3/cover.png"
                }
                alt="stats"
              />
            </div>
          </div>
        </section>

        <div className="md:col-start-10 md:col-end-13 md:glass">
          {/* plz design a headline for all bokings */}
          <h1 className="text-xl font-medium title-font m-4 text-center">
            All Bookings
          </h1>
          <div className="px-5 py-4 mx-auto flex flex-wrap gap-4 md:h-96 md:overflow-hidden md:overflow-y-scroll">
            {
              // Array of bookings
              event?.bookings?.map((booking, index) => (
                <>
                  <BookingSummCard key={index} booking={booking} />
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;

{
  /* <section
          className="text-gray-600 body-font 
         md:col-start-1 md:col-end-10"
        >
          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                  {event?.title}
                </h1>
                <div className="leading-relaxed">{event?.description}</div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {event?.bookings?.length}
                </h2>
                <p className="leading-relaxed">Bookings</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p className="leading-relaxed">Graduates</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p className="leading-relaxed">Successful Candidates</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  4
                </h2>
                <p className="leading-relaxed">Certified Members</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src={
                  event?.image
                    ? event?.image
                    : "https://i.ibb.co/x1Kc5d3/cover.png"
                }
                alt="stats"
              />
            </div>
          </div>
        </section> */
}
