const Cards = require("../models/Cards");

//Show all cards
const indexCards = (req, res, next) => {
  Cards.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Ocorreu um erro!",
      });
    });
};

//Store cards
const storeCards = (req, res, next) => {
  let cards = new Cards({
    title: req.body.title,
    subtitle: req.body.subtitle,
    text: req.body.text,
    image: req.body.image,
  });
  cards
    .save()
    .then((response) => {
      res.json({
        message: "Registrado com sucesso!",
      });
    })
    .catch((error) => {
      res.json({
        message: "Ocorreu um erro!",
      });
    });
};

module.exports = {
  indexCards,
  storeCards,
};
