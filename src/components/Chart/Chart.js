import React from "react";
import "./ChartBar.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapPoint) => (
        <ChartBar
          key={datapPoint.label}
          value={datapPoint.value}
          maxValue={totalMaximun}
          label={datapPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
