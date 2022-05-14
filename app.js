const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("dotenv/config");

const API = process.env.API_URL;
const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;

//Middlewares
app.use(bodyParser.json());

//Routers
const productsRouter = require("./routers/products");
const categoriesRouter = require("./routers/categories");
const ordersRouter = require("./routers/orders");
const usersRouter = require("./routers/users");

app.use(`${API}/products`, productsRouter);
app.use(`${API}/categories`, categoriesRouter);
app.use(`${API}/orders`, ordersRouter);
app.use(`${API}/users`, usersRouter);

//Database
mongoose
  .connect(MONGODB_CONNECTION)
  .then(() => console.log("Database Connection is ready"))
  .catch((err) => console.log("error connection", err));

//Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
