const express = require("express");
const db = require("./db");

const app = express();
const Pizzas = require("./models/pizzaModel");

app.use(express.json());

app.get("/", (req, res) => res.send("First res."));

app.get("/api/getPizzas", (req, res) => {
  Pizzas.find({}, (err, docs) => {
    if (err) {
      console.log("doc err.....", err);
    } else {
      res.send(docs);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server starts"));
