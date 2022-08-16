import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
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
        data: [
          0.1, 0.5, 0.3, 0.6, 0.2, 0.7, 0.3, 0.1, 0.5, 0.6, 0.9, 0.5, 0.3, 0.1,
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.2,
        borderColor: "rgb(135, 206, 235)",
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 500);
          gradient.addColorStop(0, "rgba(135, 206, 235,0.5)");
          gradient.addColorStop(1, "rgba(135, 206, 235,0)");
          return gradient;
        },
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
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 0,
      },
    },
    cutout: 50,
  };
  return <Doughnut data={data} width={100} height={40} options={options} />;
};

export { AreaChart, DoughnutChart };
