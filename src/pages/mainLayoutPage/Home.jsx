import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/maniLayout/Breadcrumbs";
import EventCard from "../../components/maniLayout/EventCard";
import SectionHeadline from "../../components/shared/SectionHeadline";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState([]);
  // Fetch events from the server
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/events")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
