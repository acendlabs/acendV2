import React, { FC } from "react";
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
import moment from "moment";
import { IMemo } from "../../../../hooks/useBalanceHistory";
import { IMemo as IMemoTokenV2 } from "../../../../hooks/useTokenBalancesV2";

const AreaChart = ({ labels, data: Data }: IMemo) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Balance",
        data: Data,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "60 Day Portfolio (USD)",
        color: "rgb(135, 206, 235)",
      },
      tooltip: {
        enabled: true,
        usePointStyle: true,
        callbacks: {
          title: function (data: any) {
            return moment(data[0].label).format("ddd MMM DD YYYY");
          },
          label: function (data: any) {
            let label = data.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (data.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(data.parsed.y);
            }
            return label;
          },
        },
        titleFontStyle: "bold",
      },
    },
    elements: {
      line: {
        tension: 0.2,
        borderColor: "rgb(135, 206, 235)",
        fill: "start",
        backgroundColor: (data: any) => {
          const ctx = data.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(135, 206, 235,0.5)");
          gradient.addColorStop(1, "rgba(135, 206, 235,0)");
          return gradient;
        },
      },
      point: {
        radius: 1,
        hitRadius: 7,
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

const DoughnutChart = ({ top5 }: { top5: IMemoTokenV2[] | undefined }) => {
  const reducedTop5 = top5?.reduce(
    (memo: { labels: string[]; values: number[] }, cur: IMemoTokenV2) => {
      memo.labels.push(cur.symbol);
      memo.values.push(cur.usdValue);
      return memo;
    },
    { labels: [], values: [] }
  );

  const data = {
    backgroundColor: [
      "rgb(2,88,255)",
      "rgb(249,151,0)",
      "rgb(255,199,0)",
      "rgb(32,214,152)",
      "rgb(255,55,0)",
    ],
    labels: reducedTop5?.labels,

    datasets: [
      {
        label: "first dataset",
        data: reducedTop5?.values,
        backgroundColor: [
          "rgb(2,88,255)",
          "rgb(249,151,0)",
          "rgb(255,199,0)",
          "rgb(32,214,152)",
          "rgb(255,55,0)",
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
      title: {
        display: true,
        text: "Top 5 Assets",
        color: "rgb(135, 206, 235)",
      },
    },
    elements: {
      arc: {
        weight: 0.5,
        borderWidth: 0,
        spacing: 10,
        borderRadius: 10,
      },
    },
    cutout: "85%",
    radius: "85%",
  };
  return <Doughnut data={data} width={100} height={40} options={options} />;
};

export { AreaChart, DoughnutChart };
