import React from "react";

import './TurfFilter.css';

const TurfFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="turf-filter">
      <div className="turf-filter__control">
        <label>Filter by place:</label>
        <br />
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Banglore">Banglore</option>
        </select>
      </div>
    </div>
  );
};

export default TurfFilter;
