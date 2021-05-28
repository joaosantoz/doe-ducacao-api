const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardsSchema = new Schema(
  {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Cards = mongoose.model("Cards", cardsSchema);

module.exports = Cards;
