import React from "react";
import { Bar } from "react-chartjs";

const typeOfSportChart = (props) => {
  // console.log(props.bookings[0].event.category);
  let chartData = [0, 0, 0, 0, 0, 0];
  for (let i in props.bookings) {
    if (props.bookings[i].event.category === "Football") {
      chartData[0] += 1;
    } else if (props.bookings[i].event.category === "Circket") {
      chartData[1] += 1;
    } else if (props.bookings[i].event.category === "Basketball") {
      chartData[2] += 1;
    } else if (props.bookings[i].event.category === "Badminton") {
      chartData[3] += 1;
    } else if (props.bookings[i].event.category === "Volleyball") {
      chartData[4] += 1;
    } else if (props.bookings[i].event.category === "Table Tennis") {
      chartData[5] += 1;
    }
  }

  const data = {
    labels: [
      "Football",
      "Circket",
      "Basketball",
      "Badminton",
      "Volleyball",
      "Table Tennis",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: chartData,
        fillColor: "rgba(243, 234, 24, 0.6)",
        strokeColor: "rgba(243, 234, 24, 0.8)",
        highlightFill: "rgba(243, 234, 24, 0.75)",
        highlightStroke: "rgba(243, 234, 24, 0.1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Number of matches played per sport.",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default typeOfSportChart;
