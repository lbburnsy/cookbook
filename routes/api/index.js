const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./users");

router.use("/recipes", recipeRoutes);

module.exports = router;
