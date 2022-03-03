import nc from "next-connect";
import config from "/config/db";
import User from "/models/User";
import Card from "/models/Card";
import { isAuth } from "/utils/auth";

const handler = nc();

handler.use(isAuth);

handler.get(async (req, res) => {
  try {
    await config.dbConnect();
    const user = await User.findOne({ _id: req.user._id }).populate(
      "cardCollection"
    );
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
