import React, { useState, useEffect } from "react";
import { AreaChart, DoughnutChart } from "./Charts";
import useBalanceHistory, { IMemo } from "../../../hooks/useBalanceHistory";
import { IMemo as ITokenV2Memo } from "../../../hooks/useTokenBalancesV2";
import { useSession } from "next-auth/react";
import TokenList from "./Tokens";
import Error from "../../Flow/Error";
import Loading from "../../Flow/Loading";
import Services from "./Services";
import Transfers from "./Transfers";
//0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8
function Portfolio() {
  const { data } = useSession();
  const [chartData, setChartData] = useState<IMemo>();
  const [top5, setTop5] = useState<ITokenV2Memo[]>();

  const queryBalanceHistory = useBalanceHistory(
    // data?.user.chainId as unknown as string,
    "1",
    "0xCC850abe97204a34B2f8b701cEc7081Ab666fA2C"
    // data?.user.address as string
  );

  const initChart = async () => {
    setChartData(undefined);
    await queryBalanceHistory().then((response) => setChartData(response));
  };

  useEffect(() => {
    if (!chartData) {
      (async () => {
        await initChart();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 relative">
      {/* Area chart */}
      <div className="md:col-span-4 pt-2 relative bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        {chartData ? (
          chartData?.data.length > 1 ? (
            <AreaChart labels={chartData?.labels} data={chartData?.data!} />
          ) : (
            <Error callback={initChart} />
          )
        ) : (
          <Loading />
        )}
      </div>
      {/* Doughnut Chart */}
      <div className="md:col-span-2 p-2 w-full relative bg-white rounded-lg dark:bg-gray-800">
        <div className="w-[50%] m-auto">
          {top5 ? <DoughnutChart top5={top5} /> : <Loading />}
        </div>
        {top5 && (
          <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center gap-5 text-gray-900 dark:text-white mt-5">
            <p>
              <span className="bg-[rgb(2,88,255)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[0].name}
            </p>
            <p>
              <span className="bg-[rgb(249,151,0)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[1].name}
            </p>
            <p>
              <span className="bg-[rgb(255,199,0)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[2].name}
            </p>
            <p>
              <span className="bg-[rgb(32,214,152)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[3].name}
            </p>
            <p>
              <span className="bg-[rgb(255,55,0)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[4].symbol}
            </p>
          </div>
        )}
      </div>
      {/* services Links */}
      <div className="md:col-span-6 w-full  bg-white rounded-lg dark:bg-gray-800">
        <Services address={data?.user.address} />
      </div>
      {/* Token List */}
      <div className="md:col-span-3 p-4  md:max-w-[85%] w-full max-h-[85vh] overflow-y-auto overflow-x-hidden bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-0 m-auto">
        <TokenList
          address="0xCC850abe97204a34B2f8b701cEc7081Ab666fA2C"
          chain={1}
          setTop5={setTop5}
        />
      </div>
      <div className="md:col-span-3 p-4 md:max-w-[75%] w-full max-h-[85vh] overflow-y-auto overflow-x-hidden bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-0 m-auto">
        <Transfers
          address="0xCC850abe97204a34B2f8b701cEc7081Ab666fA2C"
          chain={1}
        />
      </div>
    </div>
  );
}

export default Portfolio;
