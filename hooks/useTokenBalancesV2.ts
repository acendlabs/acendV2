import { formatUnits } from "ethers/lib/utils";
import { TokenBalancesEndpoint } from "../utils/endpoints";
import { getCovalentData } from "../utils/query";

export interface IMemo {
  decimals: number;
  name: string;
  symbol: string;
  contractAddress: string;
  logo: string;
  balance: string;
  usdUnitPrice: number;
  usdValue: number;
  isNative: boolean;
  isLegit: boolean;
}

export const useTokenBalances = (address: string, chainId: string) => {
  const endpoint = TokenBalancesEndpoint(address, chainId);

  const reduceResult = (data: {}[]) => {
    const tokenBalance = data.reduce((memo: IMemo[], tokens: any) => {
      memo.push({
        decimals: tokens.contract_decimals,
        name: tokens.contract_name,
        symbol: tokens.contract_ticker_symbol,
        contractAddress: tokens.contract_address,
        logo: tokens.logo_url,
        balance: formatUnits(tokens.balance, tokens.contract_decimals),
        usdUnitPrice: tokens.quote_rate,
        usdValue: tokens.quote,
        isNative: tokens.native_token,
        isLegit: tokens.quote_rate_24h && tokens.quote_24h,
      });
      return memo;
    }, []);
    return tokenBalance;
  };

  async function getTokenBalances() {
    // query balance
    const response = await getCovalentData(endpoint);
    // filter out nfts
    const tokenBalances = response && reduceResult(response);
    // setsBalance
    return tokenBalances;
  }

  return getTokenBalances;
};
