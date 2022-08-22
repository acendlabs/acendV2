import React, { useState, useEffect } from "react";
import query from "../../../../utils";

const TokenList = ({
  address,
  chain,
}: {
  address: string | undefined;
  chain: number | undefined;
}) => {
  const [userTokens, setUserTokens] = useState<{ [key: string]: any }[]>([]);

  useEffect(() => {
    if (userTokens.length === 0) {
      (async () =>
        await query("/account/request-tokens", {
          address: address,
          chain: chain,
        })
          .then((response) => setUserTokens(response))
          .catch((error) => console.log(error)))();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);

  const renderList = (): JSX.Element[] => {
    return userTokens.map((token) => {
      return (
        <li className="py-3 sm:py-4" key={token.token.contractAddress}>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={token.token.logo}
                alt={token.token.name}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {token.token.name}
              </p>
            </div>
            <div className="text-right">
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                $320
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {token.value} {token.token.symbol}
              </p>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="md:col-span-4 p-4  w-full max-h-screen overflow-y-auto overflow-x-hidden bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
          {renderList()}
        </ul>
      </div>
    </div>
  );
};

export default TokenList;
