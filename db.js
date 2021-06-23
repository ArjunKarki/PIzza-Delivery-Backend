const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://arjun:arjun@cluster0.9knik.mongodb.net/pizza-delivery";

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on("connected", () => {
  console.log("db connected");
});

db.on("error", () => console.log("Db connection failed"));

module.exports = mongoose;
