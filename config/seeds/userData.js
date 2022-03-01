import bcrypt from "bcrypt";

const userData = {
  users: [
    {
      firstName: "John",
      lastName: "Doe",
      email: "admin@admin.com",
      password: bcrypt.hashSync("test123", 10),
      cardCollection: [],
      userImage: "/images/adminPic.jpg",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "e@e.com",
      password: bcrypt.hashSync("test123", 10),
      cardCollection: [],
    },
  ],
};

export default userData;
