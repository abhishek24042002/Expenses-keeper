import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

  return (
    <>
      <div className="chart">
        {props.dataPoints.map((data) => {
          return (
            <ChartBar
              key={data.label}
              value={data.value}
              maxValue={totalMaximum}
              label={data.label}
            />
          );
        })}
      </div>
    </>
  );
};

export default Chart;
