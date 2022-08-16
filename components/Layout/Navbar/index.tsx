import React, { FC } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useAuth from "../../../hooks/useAuth";
import LoggedIn from "./LoggedIn";
import { Metamask } from "@web3uikit/icons";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
}

const Navbar: FC<IProps> = ({ isOpen, toggle }) => {
  const handleAuth = useAuth();
  const { status, data } = useSession();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex md:order-2 gap-4">
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggle}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/images/logo-1.png"
                className="mr-2 w-9 h-9 rounded-full ring-2 ring-blue-400"
                alt="acend Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Acend
              </span>
            </div>
          </Link>
        </div>

        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleAuth()}
          >
            {status === "authenticated" ? (
              <LoggedIn address={data?.user.address} />
            ) : (
              <div className="inline-flex gap-2">
                <Metamask fontSize="20px" />
                <p>Log In</p>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
