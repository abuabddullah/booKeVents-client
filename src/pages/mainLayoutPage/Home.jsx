import axios from "axios";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/maniLayout/Breadcrumbs";
import EventCard from "../../components/maniLayout/EventCard";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import SectionHeadline from "../../components/shared/SectionHeadline";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading4Events, setLoading4Events] = useState(true);
  // Fetch events from the server
  useEffect(() => {
    try {
      /* fetch("https://bookevents-server.onrender.com/api/v1/events")
        .then((res) => res.json())
        .then((data) => {
          setEvents(data);
          setLoading4Events(false);
        }); */
      const loadEvents = async () => {
        axios
          .get("https://bookevents-server.onrender.com/api/v1/events")
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
      <Breadcrumbs pageName={"Home - Events"} />
      <SectionHeadline
        secTitle="Upcoming Events"
        secSubTitle="Check out the upcoming events"
      />
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

export default Home;
