const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

router.route("/").get(recipesController.findAll).post(recipesController.create);
router
  .route("/:id")
  .get(recipesController.findById)
  .delete(recipesController.remove);

module.exports = router;
