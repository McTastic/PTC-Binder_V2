import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    api_id: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    card_type: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
