const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const CardsController = require("../controllers/CardsController");
const upload = require("../middleware/Upload");

router.get("/users", UserController.indexUser);
router.post("/users/store", UserController.storeUser);
router.post("/users/login", UserController.loginUser)

router.get("/cards", CardsController.indexCards);
router.post("/cards/store", upload.single("image"), CardsController.storeCards);
router.delete("/cards/store", CardsController.deleteCard);

module.exports = router;
