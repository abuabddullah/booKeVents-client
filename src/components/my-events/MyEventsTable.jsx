import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import MyEvnTablHeader from "./MyEvnTablHeader";

const MyEventsTable = ({ events }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handlePayment = async (id) => {
    // navigate(`/payment/${id}`);
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
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <MyEvnTablHeader />
          </thead>
          <tbody>
            {
              // Array of events
              events?.map((event, index) => (
                <>
                  <tr>
                    <th>{index + 1}</th>
                    <td>{event?.title}</td>
                    <td>{event?._id}</td>
                    <td>{event?.price}</td>
                    <td>
                      at {event?.time} on {event?.date}
                    </td>
                    <td>{event?.hostName}</td>
                    <td>
                      {event?.attendees && event?.attendees[0]?.isPaid ? (
                        <span className="text-success">Paid</span>
                      ) : (
                        <button
                          onClick={() => handlePayment(event?._id)}
                          className="btn btn-sm m-1 btn-success text-white"
                        >
                          Pay
                        </button>
                      )}
                      <button className="btn btn-sm m-1 btn-disabled text-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              ))
            }
          </tbody>
          <tfoot>
            <MyEvnTablHeader />
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default MyEventsTable;
