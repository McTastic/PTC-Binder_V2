import nc from "next-connect";
import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const key = serverRuntimeConfig.POKE_KEY;

const handler = nc();

handler.get(async (req, res) => {
  const userInput = req.headers.query;
  const currentPage = 1;
  try {
    const result = await axios.get(
      `https://api.pokemontcg.io/v2/cards/?q=name:${userInput}&page=${currentPage}&pageSize=10`,
      {
        headers: {
          "X-Api-Key": key,
        },
      }
    );
    // console.log(result);
    res.send(result.data);
  } catch (error) {
    console.log(error);
  }
});

export default handler;
