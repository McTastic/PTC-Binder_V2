import nc from "next-connect";
import dbConnect from "/config/db";
import User from "/models/User";
import bcrypt from "bcrypt";
import { signToken } from "/utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  dbConnect();
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  const user = await newUser.save();
  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
});

export default handler;
