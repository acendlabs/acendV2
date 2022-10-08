import { getCovalentData } from "../utils/query";
import { BalanceHistoryEndpoint } from "../utils/endpoints";
export interface IMemo {
  labels: (string | undefined)[];
  data: (number | undefined)[];
}

function useBalanceHistory(chainId: string, address: string) {
  const endpoint = BalanceHistoryEndpoint(address, chainId);

  const reduceResult = (data: { [key: string]: any }[]) => {
    //const memo:IMemo = {labels: [], data: []}
    const balanceHistoryUSD = data.reduce(
      (memo, monthlyOHLC) => {
        monthlyOHLC.holdings.reverse().map((subEl: { [key: string]: any }) => {
          if (memo.labels.includes(subEl.timestamp.slice(0, 10))) {
            const curIndex = memo.labels.indexOf(subEl.timestamp.slice(0, 10));
            if (subEl.close.quote) memo.data[curIndex] += subEl.close.quote;
          } else {
            memo.labels.push(subEl.timestamp.slice(0, 10));
            memo.data.push(subEl.close.quote);
          }
        });
        return memo;
      },
      <IMemo>{ labels: [], data: [] }
    );
    return balanceHistoryUSD;
  };

  async function queryBalanceHistory() {
    const response = await getCovalentData(endpoint);
    if (response) {
      const balanceHistoryUSD = reduceResult(response);
      const { labels, data } = balanceHistoryUSD;
      return { labels, data };
    } else {
      return { labels: [], data: [] };
    }
  }

  return queryBalanceHistory;
}

export default useBalanceHistory;
