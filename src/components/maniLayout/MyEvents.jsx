import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../shared/LoadingSpinner";
import SectionHeadline from "../shared/SectionHeadline";
import Breadcrumbs from "./Breadcrumbs";
import EventCard from "./EventCard";

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
  }, []);

  if (loading4Events) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Breadcrumbs pageName={"My Events"} />
      <SectionHeadline secTitle="My Events" secSubTitle="" />
      <div className="grid md:grid-cols-3 gap-6">
        {
          // Array of events
          events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        }
      </div>
    </>
  );
};

export default MyEvents;
