import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Braking", 11],
  ["Engine", 2],
  ["Interior", 2],
  ["Exterior", 2],
  ["Drivetrain", 7],
];

export const options = {
  title: "Cost breakdown",
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
