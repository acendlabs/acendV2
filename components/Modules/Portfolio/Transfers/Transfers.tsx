import { formatUnits } from "ethers/lib/utils";
import React, { useState, useEffect } from "react";
import { formatAddress } from "../../../../utils";
import { getTokensMetadata } from "../Tokens/getTokens";
import { getERC20Transfers } from "./getTransfers";

interface ERCContractMetadata {
  contractAddress: string;
  decimals: number;
  logo: string;
  name: string;
  symbol: string;
}

interface IContractMetadata {
  token: ERCContractMetadata;
}

const Transfers = ({
  address,
  chain,
}: {
  address: string | undefined;
  chain: number | undefined;
}) => {
  const [erc20Transfers, setErc20Transfers] = useState<
    { [key: string]: any }[]
  >([]);
  const [erc20ContractMetadatas, setErc20ContractMetadatas] = useState<{
    [key: string]: ERCContractMetadata;
  }>({});

  const metadatas = async (transactions: any) => {
    const contracts = Array.from(
      new Set(transactions.map((tx: { address: string }) => tx.address))
    );
    const contractsMetadata = await getTokensMetadata(
      contracts as string[],
      chain
    );

    const reducedMetadata = contractsMetadata.reduce(
      (memo: { [key: string]: {} }, cur: IContractMetadata) => {
        memo[cur.token.contractAddress] = {
          name: cur.token.name,
          symbol: cur.token.symbol,
          logo: cur.token.logo,
          decimals: cur.token.decimals,
        };
        return memo;
      },
      {}
    );

    return reducedMetadata;
  };

  const init = async () => {
    const data = (await getERC20Transfers(address, chain)).slice(0, 25);
    if (data) {
      setErc20ContractMetadatas(await metadatas(data));
      setErc20Transfers(data);
    }
  };

  useEffect(() => {
    if (erc20Transfers.length === 0) init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, chain]);

  const renderList = (): JSX.Element[] => {
    return erc20Transfers.map((transfer) => {
      return (
        <li
          className="py-1 sm:py-2 px-3 sm:px-4 rounded-2xl dark:bg-gray-700 bg-gray-100"
          key={transfer?.blockTimestamp}
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src={erc20ContractMetadatas[transfer?.address].logo}
                alt={erc20ContractMetadatas[transfer?.address].name}
                onError={(e) => {
                  e.currentTarget.src = "/images/mock.webp";
                }}
              />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              {transfer?.fromAddress === address?.toLowerCase() ? (
                <span className="inline-flex justify-center items-center px-2 text-sm font-medium text-gray-800 bg-green-200 rounded-full dark:bg-green-700 dark:text-gray-300">
                  sent{" "}
                  <svg
                    className="w-4 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7l4-4m0 0l4 4m-4-4v18"
                    />
                  </svg>
                </span>
              ) : (
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-green-200 rounded-full dark:bg-green-700 dark:text-gray-300">
                  recieved{" "}
                  <svg
                    className="w-4 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                </span>
              )}

              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {parseFloat(
                  formatUnits(
                    transfer?.value,
                    erc20ContractMetadatas[transfer?.address].decimals
                  )
                ).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}{" "}
                {erc20ContractMetadatas[transfer?.address].symbol}
              </p>
              <p className="text-sm text-blue-500 truncate dark:text-blue-400 underline">
                tx: {formatAddress(transfer?.transactionHash)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                {transfer.blockTimestamp.slice(0, 10)}{" "}
                {transfer.blockTimestamp.slice(11, 16)}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {transfer.fromAddress === address?.toLowerCase()
                  ? `To: ${formatAddress(transfer?.toAddress)}`
                  : `From: ${formatAddress(transfer?.fromAddress)}`}
              </p>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
          Recent Transfers
        </p>
      </div>
      <div className="flow-root">
        <ul role="list" className="space-y-2">
          {erc20Transfers.length > 0 &&
          Object.keys(erc20ContractMetadatas).length > 0 ? (
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

export default Transfers;
