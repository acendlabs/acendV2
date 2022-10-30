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
  const [top5TotalInUsd, setTop5TotalInUsd] = useState<number>();

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

  const getTop5TotalInUsd = () => {
    const top5Total = top5?.reduce((prev, cur) => prev + cur.usdValue, 0);
    setTop5TotalInUsd(top5Total);
  };

  useEffect(() => {
    if (!chartData) {
      (async () => {
        await initChart();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (top5) {
      getTop5TotalInUsd();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [top5]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 relative md:mx-3">
      {/* Area chart */}
      <div className="md:col-span-4 pt-3 md:p-2 relative rounded-3xl bg-gray-50 dark:bg-gray-900 shadow-md">
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
      <div className="md:col-span-2 p-3 w-full relative rounded-3xl bg-gray-50 dark:bg-gray-900 shadow-md">
        <div className="w-[50%] m-auto">
          {top5 && top5TotalInUsd ? (
            <DoughnutChart top5={top5} top5TotalInUsd={top5TotalInUsd} />
          ) : (
            <Loading />
          )}
        </div>
        {top5 && top5TotalInUsd && (
          <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center gap-5 text-gray-900 dark:text-white mt-5">
            <p>
              <span className="bg-[rgb(2,88,255)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[0].name} -{" "}
              {top5TotalInUsd &&
                ((top5[0].usdValue / top5TotalInUsd) * 100).toFixed(2)}
              %
            </p>
            <p>
              <span className="bg-[rgb(249,151,0)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[1].name} -{" "}
              {top5TotalInUsd &&
                ((top5[1].usdValue / top5TotalInUsd) * 100).toFixed(2)}
              %
            </p>
            <p>
              <span className="bg-[rgb(255,199,0)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[2].name} -{" "}
              {top5TotalInUsd &&
                ((top5[2].usdValue / top5TotalInUsd) * 100).toFixed(2)}
              %
            </p>
            <p>
              <span className="bg-[rgb(32,214,152)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[3].name} -{" "}
              {top5TotalInUsd &&
                ((top5[3].usdValue / top5TotalInUsd) * 100).toFixed(2)}
              %
            </p>
            <p>
              <span className="bg-[rgb(255,55,0)] mr-2 px-2.5 py-0.5 rounded" />
              {top5[4].symbol} -{" "}
              {top5TotalInUsd &&
                ((top5[4].usdValue / top5TotalInUsd) * 100).toFixed(2)}
              %
            </p>
          </div>
        )}
      </div>
      {/* services Links */}
      <div className="md:col-span-6 w-full  bg-white rounded-lg dark:bg-gray-800">
        <Services address={data?.user.address} />
      </div>
      {/* Token List */}
      <div className="md:col-span-4 p-4 w-full max-h-[80vh] overflow-y-auto overflow-x-hidden bg-gray-50 rounded-lg shadow-md  dark:bg-gray-900 mt-0 m-auto">
        <TokenList
          address="0xCC850abe97204a34B2f8b701cEc7081Ab666fA2C"
          chain={1}
          setTop5={setTop5}
        />
      </div>
      <div className="md:col-span-2 p-3  w-full max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-lg sm:p-8 mt-0 m-auto">
        <Transfers
          address="0xCC850abe97204a34B2f8b701cEc7081Ab666fA2C"
          chain={1}
        />
      </div>
    </div>
  );
}

export default Portfolio;
