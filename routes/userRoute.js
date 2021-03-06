const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body.user;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.send("User Register Successfully.");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
