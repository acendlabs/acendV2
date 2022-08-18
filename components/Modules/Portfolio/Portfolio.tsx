import React from "react";
import { AreaChart, DoughnutChart } from "./Charts";
import { Eth } from "@web3uikit/icons";

function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {/* Area chart */}
      <div className="md:col-span-4 p-2 flex items-end bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800">
        <AreaChart />
      </div>
      {/* Doughnut Chart */}
      <div className="md:col-span-2 p-2 w-full relative bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800">
        <div className="w-[50%] m-auto">
          <DoughnutChart />
        </div>
        <div className="hidden md:flex md:flex-col">
          <p>text 1</p>
          <p>text 2</p>
          <p>text 3</p>
          <p>text 4</p>
          <p>text 5</p>
        </div>
      </div>
      {/* Token list */}
      <div className="md:col-start-2 md:col-span-3 p-4  w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Assets
          </h5>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
            Balance
          </p>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* <img
                    className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Neil image"
                  /> */}
                  <Eth />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Ethereum
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    0.15632Eth
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* services Links */}
      <div className="md:col-span-2 w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex md:flex-col items-center pb-10">
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
