import nc from "next-connect";
import User from "/models/User";
import dbConnect from "/config/db";
import userData from "/config/seeds/userData";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await dbConnect();
    await User.deleteMany();
    await User.insertMany(userData.users);
    res.send({ message: "users seeded" });
  } catch (error) {
    console.log(error);
  }
});

export default handler;
