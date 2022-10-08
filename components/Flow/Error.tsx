import React, { FC } from "react";

interface IProp {
  callback: () => void;
}

const Error: FC<IProp> = ({ callback }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className=" text-center block p-6 max-w-sm  rounded-lg shadow-md">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-gray-100">
          error!{" "}
          <span>
            <button onClick={() => callback()}>click to reload</button>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Error;
