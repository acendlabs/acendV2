const BASE_URL = "https://api.covalenthq.com/v1";
const COVALENT_HQ_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY;

export const TokenBalancesEndpoint = (
  address: string,
  chainId: string
): string => {
  return `${BASE_URL}/${chainId}/address/${address}/balances_v2/?quote-currency=USD&nft=false&no-nft-fetch=true&key=${COVALENT_HQ_KEY}`;
};

export const BalanceHistoryEndpoint = (
  address: string,
  chainId: string
): string =>
  `${BASE_URL}/${chainId}/address/${address}/portfolio_v2/?quote-currency=USD&days=45&key=${COVALENT_HQ_KEY}`;
