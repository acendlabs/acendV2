import axios from "axios";

export interface IMemo {
  labels: (string | undefined)[];
  data: (number | undefined)[];
}

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

  const reduceResult = (data: { [key: string]: any }[]) => {
    const balanceHistoryUSD = data.reduce(
      (memo, monthlyOHLC) => {
        monthlyOHLC.holdings.reverse().map((subEl: { [key: string]: any }) => {
          memo.labels.push(subEl.timestamp.slice(0, 10));
          memo.data.push(subEl.close.quote);
        });
        return memo;
      },
      <IMemo>{ labels: [], data: [] }
    );
    return balanceHistoryUSD;
  };

  async function queryBalanceHistory() {
    const response = await query();
    console.log(response);
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
