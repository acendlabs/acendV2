import React, { useState } from "react";
import Link from "next/link";
import Recieve from "./Modal/Recieve";

const Services = ({ address }: { address: string | undefined }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex md:flex-col items-center justify-center pb-10">
      {modal && <Recieve address={address} callBack={setModal} />}
      <div className="flex mt-4 space-x-3 md:space-x-10 md:mt-6">
        <div className="m-auto">
          <Link href="/buy">
            <a className="inline-flex items-center py-1 px-3 text-sm font-medium text-center dark:text-gray-300 text-white shadow-md focus:outline-none bg-gray-50 dark:bg-gray-900 rounded-xl">
              <svg
                className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
          <p className="dark:text-gray-200 text-gray-600 font-semibold text-center">
            buy
          </p>
        </div>
        <div className="m-auto">
          <Link href="/trade">
            <a className="inline-flex items-center py-1 px-3 text-sm font-medium text-center dark:text-gray-300 text-white shadow-md focus:outline-none bg-gray-50 dark:bg-gray-900 rounded-xl">
              <svg
                className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
          <p className="dark:text-gray-200 text-gray-600 font-semibold text-center">
            trade
          </p>
        </div>
        <div className="m-auto">
          <Link href="/bridge">
            <a className="inline-flex items-center py-1 px-3 text-sm font-medium text-center dark:text-gray-300 text-white shadow-md focus:outline-none bg-gray-50 dark:bg-gray-900 rounded-xl">
              <svg
                className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
          <p className="dark:text-gray-200 text-gray-600 font-semibold text-center">
            bridge
          </p>
        </div>
        <div className="m-auto">
          <Link href="/bridge">
            <a className="inline-flex items-center py-1 px-3 text-sm font-medium text-center dark:text-gray-300 text-white shadow-md focus:outline-none bg-gray-50 dark:bg-gray-900 rounded-xl">
              <svg
                className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
          <p className="dark:text-gray-200 text-gray-600 font-semibold text-center">
            defi
          </p>
        </div>

        <div className="m-auto">
          <button
            onClick={() => setModal(true)}
            className="inline-flex items-center py-1 px-3 text-sm font-medium text-center dark:text-gray-300 text-white shadow-md focus:outline-none bg-gray-50 dark:bg-gray-900 rounded-xl"
          >
            <svg
              className="flex-shrink-0 w-6 h-10 text-blue-500 transition duration-75 group-hover:text-gray-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p className="dark:text-gray-200 text-gray-600 font-semibold text-center">
            recieve
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
