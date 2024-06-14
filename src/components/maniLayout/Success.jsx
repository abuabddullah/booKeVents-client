import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import successIMg from "./../../assets/images/TRANSACTION SUCCESSFUL.gif";
const Success = () => {
  const { id, email } = useParams();
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log("id", id);
    console.log("email", email);
    try {
      const postPayment = async () => {
        const response = await axios.patch(
          `https://bookevents-server.onrender.com/api/v1/events/payment-succcess/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.status == true) {
          toast.success(response.data.message);
        } else {
          navigate("/cancel")
          toast.error(response.data.message);
        }
      };
      postPayment();
    } catch (error) {
      console.log(error);
    }
  }, [id, email,navigate,token]);
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={successIMg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
            Transaction Successfull
          </h1>
          <p className="mb-8 leading-relaxed">
            Thank you for being with us. For trusting us. We work for your
            betterment. Be with us. Appriciate Us.
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
  );
};

export default Success;
