import React from "react";

const BookingSummCard = ({ attendee }) => {
  return (
    <>
      <div className="w-full overflow-hidden bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
        {" "}
        <div className="h-48 w-full checker-bg flex items-center justify-center p-4 text-blue-500">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                className="object-cover object-center w-full h-full"
                src={
                  attendee?.image
                    ? attendee?.image
                    : "https://i.ibb.co/x1Kc5d3/cover.png"
                }
                alt="stats"
              />
            </div>
          </div>
        </div>{" "}
        <div className="p-4 border-t border-gray-200">
          {" "}
          <div className="flex items-center justify-between">
            {" "}
            <h1 className="text-gray-600 font-medium">
              {attendee?.name ? attendee?.name : "Anonymous"}
            </h1>{" "}
            <button className="text-gray-500 hover:text-gray-900">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>{" "}
            </button>{" "}
          </div>{" "}
          <p className="text-gray-400 text-xs my-1">
            <small>{attendee?.email}</small>
          </p>{" "}
          {attendee?.isPaid ? (
            <p className="text-green-400 text-xs my-1">
              <small>Paid</small>
            </p>
          ) : (
            <p className="text-red-400 text-xs my-1">
              <small>Not Paid</small>
            </p>
          )}
        </div>{" "}
      </div>
    </>
  );
};

export default BookingSummCard;
