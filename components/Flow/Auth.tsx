import React from "react";
import { Avax, Matic, Bnb, Eth } from "@web3uikit/icons";

function Auth() {
  const surportedNetworks = [
    {
      name: "Avalanche",
      logo: Avax,
    },
    {
      name: "Polygon",
      logo: Matic,
    },
    {
      name: "ethereum",
      logo: Eth,
    },
    {
      name: "BSC",
      logo: Bnb,
    },
  ];
  const renderList = (): JSX.Element => {
    return (
      <ul className="flex flex-wrap gap-5">
        {surportedNetworks.map((network, index) => {
          return (
            <li
              key={index}
              className="bg-white dark:bg-gray-900 rounded-full p-0.5"
            >
              <network.logo fontSize="40px" />
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className=" text-center block p-6 max-w-sm bg-gray-50 rounded-xl shadow-md dark:bg-gray-900">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          You have to LogIn to use this App
        </h5>
        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
          we surport the following networks:
        </p>
        <div className="flex justify-center">{renderList()}</div>
        <p className="mt-2 font-thin text-gray-700 dark:text-gray-400">
          more comming soon! ...
        </p>
      </div>
    </div>
  );
}

export default Auth;
