import React, { useState } from "react";

import EventItem from "./EventItem/EventItem";
import EventFilter from "../EventFilter/EventFilter";
import "./EventList.css";

const eventList = (props) => {
  const [filteredEvent, setFilteredEvent] = useState("Football");

  const filterChangeHandler = (selectedEvent) => {
    setFilteredEvent(selectedEvent);
  };

  const filteredEvents = props.events.filter((event) => {
    return event.category === filteredEvent;
  });

  const events = filteredEvents.map((event) => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return (
    <React.Fragment>
      <EventFilter
        selected={filteredEvent}
        onChangeFilter={filterChangeHandler}
      />
      <ul className="event__list">{events}</ul>
    </React.Fragment>
  );
};

export default eventList;
