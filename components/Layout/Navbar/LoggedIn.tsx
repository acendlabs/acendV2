import React, { FC } from "react";
import { WalletSeed, formatAddress } from "../../../utils/helpers";
interface IProps {
  address: string;
}
const LoggedIn = ({ address }: IProps) => {
  return (
    <div className="inline-flex gap-2">
      <div className="m-auto">{formatAddress(address)}</div>
      <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full">
        {WalletSeed(address)}
      </div>
    </div>
  );
};

export default LoggedIn;
