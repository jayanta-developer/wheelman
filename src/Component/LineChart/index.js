import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const dates = [
    new Date("2023-01-01T00:00:00Z").getTime(),
    new Date("2023-01-02T00:00:00Z").getTime(),

    // Add more dates as needed
  ];

  const [chartState] = useState({
    series: [
      {
        name: "XYZ MOTORS",
        data: dates, // Assuming 'dates' is defined elsewhere in your code
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: (val) => (val / 1000000).toFixed(0),
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: (val) => (val / 1000000).toFixed(0),
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
