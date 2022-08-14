import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line, Doughnut } from "react-chartjs-2";

const AreaChart = () => {
  const data = {
    labels: [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    datasets: [
      {
        data: [0.1, 0.2, 0.3, 0.4, 0.1, 0.9],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgroundColor: "rgba(47,97,68,0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
  return <Line data={data} width={100} height={40} options={options} />;
};

const DoughnutChart = () => {
  const data = {
    backgroundColor: [
      "rgb(2,88,255)",
      "rgb(249,151,0)",
      "rgb(255,199,0)",
      "rgb(32,214,152)",
    ],
    labels: ["jan", "feb", "mar", "apr"],
    datasets: [
      {
        label: "first dataset",
        data: [300, 50, 100, 200],
        backgroundColor: [
          "rgb(2,88,255)",
          "rgb(249,151,0)",
          "rgb(255,199,0)",
          "rgb(32,214,152)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 3,
      },
    },
    cutout: 150,
  };
  return <Doughnut data={data} width={100} height={40} options={options} />;
};

export { AreaChart, DoughnutChart };
