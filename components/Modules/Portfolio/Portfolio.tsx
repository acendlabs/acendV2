import React, { useState, useEffect } from "react";
import { AreaChart, DoughnutChart } from "./Charts";
import useBalanceHistory, { IMemo } from "../../../hooks/useBalanceHistory";
import { useSession } from "next-auth/react";
import TokenList from "./Tokens";
//0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8
function Portfolio() {
  const { data } = useSession();
  const [chartData, setChartData] = useState<IMemo>();
  const queryBalanceHistory = useBalanceHistory(
    "0x5a3a83b98a3689471B033E9C41Bc434525a3115b",
    // data?.user.chainId as unknown as string,
    data?.user.address as string
  );

  const initChart = async () =>
    await queryBalanceHistory().then((response) => setChartData(response));

  useEffect(() => {
    if (!chartData) {
      (async () => {
        await initChart();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {/* Area chart */}
      <div className="md:col-span-4 p-2 flex items-end bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800">
        {chartData ? (
          chartData?.data.length > 1 ? (
            <AreaChart labels={chartData?.labels} data={chartData?.data!} />
          ) : (
            <div>Error</div>
          )
        ) : (
          <div>Loading</div>
        )}
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
      {/* Token List */}
      <TokenList
        address="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
        chain={data?.user.chainId}
      />
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
