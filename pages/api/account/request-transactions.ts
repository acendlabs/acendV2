import { NextApiRequest, NextApiResponse } from "next";
import Moralis from "moralis";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { address, chain } = req.body;
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
  try {
    const response = await Moralis.EvmApi.account.getTransactions({
      address: address,
      chain: chain,
    });
    res.status(200).json(response.toJSON());
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default handler;
