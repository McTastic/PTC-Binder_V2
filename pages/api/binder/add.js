import nc from "next-connect";
import dbConnect from "/config/db";
import User from "/models/User";
import Card from "/models/Card";
import { isAuth } from "/utils/auth";

const handler = nc();

handler.use(isAuth);

handler.post(async (req, res) => {
  try {
    await dbConnect();
    const newCard = new Card({
      ...req.body,
    });
    await newCard.save();
    const updateUser = await User.findOneAndUpdate(
      {
        _id: req.user._id,
      },
      {
        $push: {
          cardCollection: newCard._id,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    const addCardSuccess = await updateUser.save();
    res
      .status(201)
      .send({ message: "Card added successfully", addCardSuccess });
  } catch (err) {
    console.log(err);
  }
});

export default handler;
