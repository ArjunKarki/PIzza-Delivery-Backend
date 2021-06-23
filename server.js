const express = require("express");
const db = require("./db");
const pizzaRouter = require("./routes/pizzaRoute");
const app = express();
const Pizzas = require("./models/pizzaModel");

app.use(express.json());

app.use("/api/pizza", pizzaRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server starts"));
