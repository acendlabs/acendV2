import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import query from "../utils/query";

const useAuth = () => {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async (connector?: Connector, disabled?: boolean) => {
    // if (disabled) {
    //   alert("wallet connect mode is not yet enabled");
    //   return;
    // }

    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new InjectedConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { message } = await query("/auth/request-message", userData);

    const signature = await signMessageAsync({ message });

    try {
      await signIn("credentials", { message, signature, redirect: false });
      // redirects to main page
      push("/");
    } catch (e) {
      return;
    }
  };

  return handleAuth;
};

export default useAuth;
