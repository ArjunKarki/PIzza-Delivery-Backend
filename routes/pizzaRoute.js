const express = require("express");
const router = express.Router();
const PizzaModel = require("../models/pizzaModel");

router.get("/getPizzas", async (req, res) => {
  try {
    const pizzss = await PizzaModel.find({});
    res.send(pizzss);
  } catch (error) {
    res.status(400).json({ message: "Retrieving data failed" });
  }
});

module.exports = router;
