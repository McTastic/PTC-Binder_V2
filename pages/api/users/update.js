import nc from "next-connect";
import config from "/config/db";
import User from "/models/User";
import { isAuth } from "/utils/auth";

const handler = nc();
handler.use(isAuth);

handler.put(async (req, res) => {
  try {
    await config.dbConnect();
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: req.body }
    );
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: "User not found" });
  }
});

export default handler;
