import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmBookingModal = ({eventData}) => {
    const navigate = useNavigate();


  // handleConfirmBooking

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    console.log(username);
    const isConfirmed = confirm("Are you sure you want to book this event?");
    if (isConfirmed) {
      if (!eventData?.price) {
        alert("Booking Confirmed!");
      } else if (eventData?.price) {
        alert(`Booking Confirmed! You will be charged ${eventData?.price}`);
        navigate(`/payment/${eventData?._id}`);
      }
    } else {
      alert("Booking Cancelled!");
    }

    // close the modal
    document.getElementById("my_modal_3").close();
  };
  return (
    <>
      <button
        type="submit"
        className="text-white py-2 px-4 uppercase rounded bg-green-600 hover:bg-lime-700 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        onClick={() => document.getElementById("my_modal_3").showModal()}
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
                        document.getElementById("my_modal_3").showModal()
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
    </>
  );
};

export default ConfirmBookingModal;
