import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import SectionHeadline from "../shared/SectionHeadline";
import Breadcrumbs from "./Breadcrumbs";

const Payment = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const buyFunction = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/events/pay-event/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };
  return (
    <>
      <Breadcrumbs pageName={`payment / ${id}`} />
      <SectionHeadline
        secTitle="Payment"
        secSubTitle="Please enter your payment details"
      />
      <div>
        <button className="mx-20 my-auto p-4 text-xl bg-green-400 text-white border-none rounded-md cursor-pointer hover:bg-gree-600" onClick={buyFunction}>Pay Now</button>
      </div>
    </>
  );
};

export default Payment;
