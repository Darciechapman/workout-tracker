const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useFindAndModify: true,
  useNewUrlParser: true
});

app.use(routes);

app.listen(PORT, () => {
  console.log("app running on locahost:" + PORT);
});