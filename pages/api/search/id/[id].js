import nc from "next-connect";
import axios from "axios";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const key = serverRuntimeConfig.POKE_KEY;

const handler = nc();

handler.get(async (req, res) => {
  const cardId = req.query.id;
  try {
    const result = await axios.get(
      `https://api.pokemontcg.io/v2/cards/${cardId}`,
      {
        headers: {
          "X-Api-Key": key,
        },
      }
    );
    // console.log(result);
    res.send(result.data);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
