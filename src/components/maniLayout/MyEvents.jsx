import axios from "axios";
import React, { useEffect, useState } from "react";
import MyEventsTable from "../my-events/MyEventsTable";
import LoadingSpinner from "../shared/LoadingSpinner";
import SectionHeadline from "../shared/SectionHeadline";
import Breadcrumbs from "./Breadcrumbs";

const MyEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading4Events, setLoading4Events] = useState(true);
  const token = localStorage.getItem("token");
  // Fetch events from the server based on user email wich will passed through the token
  useEffect(() => {
    try {
      const loadEvents = async () => {
        axios
          .get("https://bookevents-server.onrender.com/api/v1/my-events", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            setEvents(res.data);
            setLoading4Events(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      loadEvents();
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  if (loading4Events) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Breadcrumbs pageName={"My Events"} />
      <SectionHeadline secTitle="My Events" secSubTitle="" />
      <div className="">
        <MyEventsTable events={events} />
      </div>
    </>
  );
};

export default MyEvents;
