import nc from "next-connect";
import config from "/config/db";
import User from "/models/User";
import Card from "/models/Card";
import { isAuth } from "/utils/auth";

const handler = nc();

handler.use(isAuth);

handler.delete(async (req, res) => {
  try {
    await config.dbConnect();
    const deleteCard = await Card.findOneAndDelete({
      _id: req.query.id,
    });
    const updateUser = await User.findOneAndUpdate(
      {
        _id: req.user._id,
      },
      {
        $pull: {
          cardCollection: req.query.id,
        },
      }
    );
    const deleteCardSuccess = await updateUser.save();
    res.status(200).send(deleteCardSuccess.cardCollection);
  } catch (err) {
    console.log(err);
  }
});

export default handler;
