const express = require("express");
const app = express();
const mongoose = require("mongoose");

const UserRoute = require("./routes/routes");
mongoose.connect("mongodb://localhost:27017/doedb");
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Conectado com o DB.");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3003);

app.use("/api", UserRoute);

console.log("pronto");
