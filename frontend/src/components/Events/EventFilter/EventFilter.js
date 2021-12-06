import React from "react";

import './EventFilter.css';

const EventFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="event-filter">
      <div className="event-filter__control">
        <label>Filter by Sport</label>
        <br />
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="Football">Football</option>
          <option value="Cricket">Cricket</option>
          <option value="Basketball">Basketball</option>
          <option value="Badminton">Badminton</option>
          <option value="Volleyball">Volleyball</option>
          <option value="Table Tennis">Table Tennis</option>
        </select>
      </div>
    </div>
  );
};

export default EventFilter;
