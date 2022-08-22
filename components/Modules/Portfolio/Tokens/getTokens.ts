import query from "../../../../utils";

const getTokens = async (address: string, chain: number) =>
  await query("/account/request-tokens", {
    address: address,
    chain: chain,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
