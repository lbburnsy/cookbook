const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./users");

router.use("/books", bookRoutes);

module.exports = router;
