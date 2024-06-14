import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth } from "../../../firebase.config";
import SectionHeadline from "../shared/SectionHeadline";
import Breadcrumbs from "./Breadcrumbs";

const Payment = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [user, loading] = useAuthState(auth);
  const [isPaid, setIsPaid] = useState(null);

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
              if (payment?.email === user?.email && payment?.eventID === id) {
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
  }, [id, token, user?.email]);

  const buyFunction = async () => {
    try {
      const response = await axios.post(
        `https://bookevents-server.onrender.com/api/v1/events/pay-event/${id}`,
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
        <button
          className="mx-20 my-auto p-4 text-xl bg-green-400 text-white border-none rounded-md cursor-pointer hover:bg-gree-600"
          onClick={buyFunction}
          disabled={isPaid}
        >
          Pay Now
        </button>
      </div>
    </>
  );
};

export default Payment;
