import React, { useState, useEffect } from "react";
import { IMemo, useTokenBalances } from "../../../../hooks/useTokenBalancesV2";

const sortTokens = (tokens: IMemo[]) => {
  return [...tokens].sort((a, b) => b.usdValue - a.usdValue).slice(0, 5);
};

const TokenList = ({
  address,
  chain,
  setTop5,
}: {
  address: string | undefined;
  chain: number | undefined;
  setTop5: React.Dispatch<React.SetStateAction<IMemo[] | undefined>>;
}) => {
  const getTokenBalances = useTokenBalances(
    address as string,
    chain?.toString() as string
  );
  const [userTokens, setUserTokens] = useState<IMemo[]>([]);

  const init = async () => {
    const tokens = await getTokenBalances();
    if (tokens) {
      setUserTokens(tokens);
      setTop5(sortTokens(tokens));
    }
  };

  useEffect(() => {
    if (userTokens.length === 0) init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);

  const renderList = (): JSX.Element[] => {
    return userTokens
      .filter((tokens) => tokens?.isLegit)
      .map((token) => {
        return (
          <li className="py-3 sm:py-4" key={token?.contractAddress}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src={token?.logo}
                  alt={token?.name}
                  onError={(e) => {
                    e.currentTarget.src = "/images/mock.webp";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {token?.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-base font-semibold text-gray-900 dark:text-white">
                  $
                  {token?.usdValue?.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {parseFloat(token?.balance).toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  {token?.symbol}
                </p>
              </div>
            </div>
          </li>
        );
      });
  };

  return (
    <>
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
          {userTokens.length > 0 ? (
            renderList()
          ) : (
            <li className="p-4 text-center text-gray-900 dark:text-white">
              nothing found ...
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default TokenList;
