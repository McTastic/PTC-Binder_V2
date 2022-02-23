import nc from "next-connect";
import axios from "axios";

const handler = nc();

handler.get(async (req, res) => {
  try {
    const result = await axios.get(`https://api.pokemontcg.io/v2/cards/xy1-1`, {
      headers: {
        "x-api-key": process.env.POKE_KEY,
      },
    });
    // console.log(result);
    res.send(result.data);
  } catch (error) {
    console.log(error);
  }
});

export default handler;
