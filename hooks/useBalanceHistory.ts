import axios from "axios";

function useBalanceHistory(chainId: string, address: string) {
  const api =
    "https://api.covalenthq.com/v1/" +
    chainId +
    `/address/${address}/portfolio_v2/?quote-currency=USD&days=60&` +
    `key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`;

  const query = async () =>
    await axios
      .get(api)
      .then((response) => {
        return response.data.data.items;
      })
      .catch((error) => console.log(error));

  type memo = {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    value?: number;
  }[];

  const reduceResult = (data: { [key: string]: any }[]) => {
    const balanceHistoryUSD = data.reduce((memo: memo, monthlyOHLC) => {
      monthlyOHLC.holdings.map(
        (subEl: { [key: string]: any }, subIndex: number) => {
          if (!memo[subIndex])
            memo[subIndex] = {
              time: "",
              open: 0,
              high: 0,
              low: 0,
              close: 0,
              value: 0,
            };
          memo[subIndex].time = subEl.timestamp.slice(0, 10);
          memo[subIndex].open += subEl.open.quote;
          memo[subIndex].high += subEl.high.quote;
          memo[subIndex].low += subEl.low.quote;
          memo[subIndex].close += subEl.close.quote;
          memo[subIndex].value += subEl.close.quote;
        }
      );
      return memo;
    }, []);
    return balanceHistoryUSD.reverse();
  };

  async function queryBalanceHistory() {
    const response = await query();
    const balanceHistoryUSD = reduceResult(response);
    const labels: string[] = [];
    const data: (number | undefined)[] = [];
    balanceHistoryUSD.map((element) => {
      labels.push(element.time);
      data.push(element.value);
    });
    return { labels, data };
  }

  return queryBalanceHistory;
}

export default useBalanceHistory;
