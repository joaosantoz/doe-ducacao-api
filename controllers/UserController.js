const User = require("../models/User");

//Show list of users
const indexUser = (req, res, next) => {
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
const storeUser = (req, res, next) => {
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

//Login
const loginUser = async (req, res, next) => {
  var login = req.body.login;
  var password = req.body.password;
  var data = { login, password };

  try {
    const exists = await User.findOne(data);

    if (exists === null) {
      res.json({
        status: 404,
        message: "Usuário ou senha incorretos!",
      })
    } else {
      res.json({
        status: 200,
        message: "Logado com sucesso!"
      })
    }



  } catch (err) {
    res.json({
      status: 500,
      message: "Ocorreu um erro! " + err
    })
  }
};

module.exports = {
  indexUser,
  storeUser,
  loginUser,
};
