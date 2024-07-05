import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import errorImg from "./../../assets/images/errorPage.gif";

const Paymentcancel = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/my-events");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={errorImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Oops! Payment cancel
            </h1>
            <p className="mb-8 leading-relaxed">
              Something went wrong on our end. Our team has been notified and is
              working on a fix.
            </p>
            <p className="mb-8 leading-relaxed text-red-500">
              Redirecting in {countdown}...
            </p>
            <div className="flex justify-center">
              <Link to="/">
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Go Back To Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paymentcancel;
