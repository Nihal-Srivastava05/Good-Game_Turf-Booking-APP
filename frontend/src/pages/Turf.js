import React from "react";
import GoogleMap from "../components/GoogleMap/GoogleMap";

import turfData from "./turf-data";
import TurfModal from "../components/Turf/TurfModal";
import TurfFilter from "../components/Turf/TurfFilter";

import "./Turf.css";

const Turf = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [filteredTurf, setFilteredTurf] = React.useState("Hyderabad");

  const filterChangeHandler = (selectedTurf) => {
    setFilteredTurf(selectedTurf);
  };

  const detailsHandler = (event) => {
    setSelectedIndex(event.target.getAttribute("data-index"));
    setModalShow(true);
  };

  const filteredTurfs = turfData.filter((event) => {
    return event.place === filteredTurf;
  })

  return (
    <div>
      <h1>Turf Booking</h1>
      <GoogleMap />
      <div style={{ marginTop: "55vh" }}>
        <h2>List of turfs available: </h2>
        <TurfFilter
          selected={filteredTurf}
          onChangeFilter={filterChangeHandler}
        />
        <ul className="turf_list">
          {filteredTurfs.map((data, index) => {
            return (
              <React.Fragment>
                <li className="turf_item">
                  <div className="turf_item-data">
                    {data.name} <br /> ₹{data.price}
                  </div>
                  <button
                    className="cust-btn"
                    key={index}
                    data-index={index}
                    onClick={detailsHandler}
                  >
                    View Details
                  </button>
                </li>
                <TurfModal
                  show={modalShow}
                  onHide={() => {
                    setModalShow(false);
                  }}
                  turfs={filteredTurfs}
                  index={selectedIndex}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Turf;
