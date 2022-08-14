import React, { FC } from "react";
import Link from "next/link";

interface IProps {
  isOpen: boolean;
}

const Sidebar: FC<IProps> = ({ isOpen }) => {
  const responsive = `${
    isOpen ? "w-[60px] md:w-64" : `md:w-[60px] w-0`
  } shadow-xl`;
  return (
    <aside className={responsive} aria-label="Sidebar">
      <div
        className={`overflow-hidden py-4 ${
          isOpen ? "" : "px-0 md:px-3"
        } px-3 h-full bg-gray-50 rounded dark:bg-gray-900`}
      >
        <ul className="space-y-2">
          <li>
            <Link href="/nft">
              <div className="flex items-center p-2 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                <svg
                  className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-4 whitespace-nowrap">NFT</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <div className="flex items-center p-2 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-4 whitespace-nowrap">Portfolio</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/trade">
              <div className="flex items-center p-2 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-4 whitespace-nowrap">Dex</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/defi">
              <div className="flex items-center p-2 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-4 whitespace-nowrap">DeFi</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/bridge">
              <div className="flex items-center p-2 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-4 whitespace-nowrap">Bridge</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/activity">
              <div className="flex items-center p-2 text-base font-semibold text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-4 whitespace-nowrap">Activity</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
