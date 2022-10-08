import React from "react";
import { formatAddress } from "../../../../utils";
import QRCode from "react-qr-code";

interface IProps {
  address: string | undefined;
  callBack: React.Dispatch<React.SetStateAction<boolean>>;
}

function Recieve({ address, callBack }: IProps) {
  return (
    <div
      id="recieve-modal"
      tabIndex={-1}
      className="overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {address && formatAddress(address)}{" "}
              <button
                onClick={() =>
                  address && navigator.clipboard.writeText(address)
                }
                className="rounded-full p-1 ml-2 bg-gray-500"
              >
                <svg
                  className="w-4 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => callBack(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 min-h-[300px]">
            <div className="rounded-xl bg-white m-auto p-2 w-[80%]">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={address as string}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recieve;
