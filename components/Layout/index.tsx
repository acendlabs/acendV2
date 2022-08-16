import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const runToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar isOpen={toggle} toggle={runToggle} />
      <div className="flex h-[95vh]">
        <Sidebar isOpen={toggle} />
        <div className="p-[1rem] w-full overflow-y-auto"> {children}</div>
      </div>
    </div>
  );
};

export default Layout;
