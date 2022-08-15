import React from "react";
import { AreaChart, DoughnutChart } from "./Charts";

function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
      <div className="md:col-span-4">
        <AreaChart />
      </div>
      <div className="md:col-span-2 w-[60%] relative m-auto">
        <DoughnutChart />
      </div>
    </div>
  );
}

export default Portfolio;
