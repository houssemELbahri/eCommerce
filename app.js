const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productsRouter = require("./routers/products");
require("dotenv/config");

const API = process.env.API_URL;
const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;

//middlewares
app.use(bodyParser.json());

//R
app.use(`${API}/products`, productsRouter);

mongoose
  .connect(MONGODB_CONNECTION)
  .then(() => console.log("Database Connection is ready"))
  .catch((err) => console.log("error connection", err));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
