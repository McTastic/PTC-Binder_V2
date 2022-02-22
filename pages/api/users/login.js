import nc from "next-connect";
import dbConnect from "/config/db";
import User from "/models/User";
import bcrypt from "bcrypt";
import { signToken } from "/utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  await dbConnect();
  const user = await User.findOne({ email: req.body.email });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userImage: user.userImage,
    });
  } else {
    res.status(401).send({ message: "Invalid email or password" });
  }
});

export default handler;
