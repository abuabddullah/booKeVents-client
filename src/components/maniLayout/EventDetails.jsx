import React from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeadline from "../shared/SectionHeadline";
import BookingSummCard from "./BookingSummCard";
import Breadcrumbs from "./Breadcrumbs";
import ConfirmBookingModal from "./eventDetails/ConfirmBookingModal";

const EventDetails = () => {
  const eventData = useLoaderData();
  console.log(eventData);

  return (
    <>
      <Breadcrumbs pageName={`Event Details / ${eventData?._id}`} />
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
                  {eventData?.title}
                </h1>
                <div className="leading-relaxed my-4">
                  {eventData?.description}
                </div>
                <div className="leading-relaxed">
                  Price:{" "}
                  <strong>
                    {eventData?.price ? eventData?.price : <span className="text-green-600">Free</span>}
                  </strong>
                </div>
              </div>
              <div className="p-4 sm:w-1/2 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  {eventData?.bookings?.length}
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

                  <ConfirmBookingModal eventData={eventData}/>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img
                className="object-cover object-center w-full h-full"
                src={
                  eventData?.image
                    ? eventData?.image
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
              eventData?.attendees?.map((attendee, index) => (
                <>
                  <BookingSummCard key={index} attendee={attendee} />
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
