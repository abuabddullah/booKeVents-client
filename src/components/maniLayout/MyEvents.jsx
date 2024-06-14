import React from 'react';
import Breadcrumbs from './Breadcrumbs';
import SectionHeadline from '../shared/SectionHeadline';
import EventCard from './EventCard';

const MyEvents = () => { const events = [
    {
      _id: 1,
      title: "Event Title",
      date: "12/12/21",
      time: "12:00 PM",
      image: "https://i.ibb.co/x1Kc5d3/cover.png",
    //   location: "Event Location",
    //   description: "Event Description",
    },
    {
      _id: 1,
      title: "Event Title",
      date: "12/12/21",
      time: "12:00 PM",
      image: "https://i.ibb.co/x1Kc5d3/cover.png",
    //   location: "Event Location",
    //   description: "Event Description",
    },
    {
      _id: 1,
      title: "Event Title",
      date: "12/12/21",
      time: "12:00 PM",
      image: "https://i.ibb.co/x1Kc5d3/cover.png",
    //   location: "Event Location",
    //   description: "Event Description",
    },
    {
      _id: 1,
      title: "Event Title",
      date: "12/12/21",
      time: "12:00 PM",
      image: "https://i.ibb.co/x1Kc5d3/cover.png",
    //   location: "Event Location",
    //   description: "Event Description",
    },
    {
      _id: 1,
      title: "Event Title",
      date: "12/12/21",
      time: "12:00 PM",
      image: "https://i.ibb.co/x1Kc5d3/cover.png",
    //   location: "Event Location",
    //   description: "Event Description",
    },
  ];
    return (
        <>
        <Breadcrumbs pageName={"My Events"} />
        <SectionHeadline
          secTitle="My Events"
          secSubTitle=""
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

export default MyEvents;