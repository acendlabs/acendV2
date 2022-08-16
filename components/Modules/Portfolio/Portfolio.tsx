import React from "react";
import { AreaChart, DoughnutChart } from "./Charts";

function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
      <div className="md:col-span-4 block p-2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700">
        <AreaChart />
      </div>
      <div className="md:col-span-2 p-2 w-full relative bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="w-[50%] m-auto">
          <DoughnutChart />
        </div>
        <div>text 1</div> <div>text 2</div> <div>text 3</div> <div>text 4</div>
        <div>text 5</div>
      </div>
    </div>
  );
}

export default Portfolio;
