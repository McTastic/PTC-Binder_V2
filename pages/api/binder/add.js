import nc from "next-connect";
import dbConnect from "/config/db";
import User from "/models/User";
import Card from "/models/Card";
import { isAuth } from "/utils/auth";

const handler = nc();

handler.use(isAuth);

handler.post(async (req, res) => {
  await dbConnect();
  const newCard = new Card({
    ...req.body,
    user: req.user._id,
  });
  const card = await newCard.save();
  res.status(201).send(card);
});

export default handler;
