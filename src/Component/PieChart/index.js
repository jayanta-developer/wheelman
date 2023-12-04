import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { value: 5, label: "Braking" },
  { value: 10, label: "Engine" },
  { value: 15, label: "Interior" },
  { value: 20, label: "Exterior" },
  { value: 20, label: "Drivetrain" },
];

const size = {
  width: 500,
  height: 300,
};

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => {
            console.log("Item:", item); // Log the item for debugging
            return `${item.label} (${item.value})`;
          },
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          // fontWeight: "bold",
        },
      }}
      {...size}
    />
  );
}
