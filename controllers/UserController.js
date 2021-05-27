const User = require("../models/User");

//Show list of users
const index = (req, res, next) => {
  User.find()
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

//Store a user
const store = (req, res, next) => {
  let user = new User({
    login: req.body.login,
    password: req.body.password,
  });
  user
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
  index,
  store,
};
