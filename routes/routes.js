const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const CardsController = require("../controllers/CardsController");

router.get("/users", UserController.indexUser);
router.post("/users/store", UserController.storeUser);

router.get("/cards", CardsController.indexCards);
router.post("/cards/store", CardsController.storeCards);

module.exports = router;
