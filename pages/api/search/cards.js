import nc from "next-connect";
import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const key = serverRuntimeConfig.POKE_KEY;

const handler = nc();
const userInput = "squirtle";
const currentPage = 1;

handler.get(async (req, res) => {
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
