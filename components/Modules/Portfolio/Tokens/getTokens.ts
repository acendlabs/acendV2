import query from "../../../../utils";

// const getTokens = async (
//   address: string | undefined,
//   chain: number | undefined
// ) =>
//   await query("/account/request-tokens", {
//     address: address,
//     chain: chain,
//   })
//     .then((response) => {
//       return response;
//     })
//     .catch((error) => console.log(error));

const getNativeBalance = async (
  address: string | undefined,
  chain: number | undefined
) =>
  await query("/account/request-nativebalance", {
    address: address,
    chain: chain,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));

const getTokensMetadata = async (
  addresses: string[],
  chain: number | undefined
) =>
  await query("/account/request-tokensmetadata", {
    addresses: addresses,
    chain: chain,
  })
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));

export { getNativeBalance, getTokensMetadata };
