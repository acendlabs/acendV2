import query from "../../../../utils/query";

export const getERC20Transfers = async (
  address: string | undefined,
  chain: number | undefined
) =>
  await query("/account/request-erc20transfers", {
    address: address,
    chain: chain,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
