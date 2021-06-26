const mongoose = require("mongoose");
const db = require("../models");
const { seedData } = require("./seedData");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cookbook");

db.Recipes.remove({})
  .then(() => db.Recipes.collection.insertMany(seedData))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
