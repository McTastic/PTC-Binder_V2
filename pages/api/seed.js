import nc from "next-connect";
import User from "/models/User";
import Card from "/models/Card";
import config from "/config/db";
import userData from "/config/seeds/userData";
import cardData from "/config/seeds/cardData";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await config.dbConnect();
    await User.deleteMany();
    const users = await User.insertMany(userData.users);

    await Card.deleteMany();
    const cards = await Card.insertMany(cardData.cards);

    cards.forEach((card) => {
      const tempUser = users[Math.floor(Math.random() * users.length)];
      tempUser.cardCollection.push(card._id);
      return tempUser.save();
    });
    res.send({ message: "data seeded" });
  } catch (error) {
    console.log(error);
  }
});

export default handler;
