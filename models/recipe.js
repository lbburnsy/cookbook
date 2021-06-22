const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // Name of recipe
  name: {
    type: String,
    required: true,
  },
  // url string for thumbnail image
  image: {
    type: String,
    default: "",
  },
  // Brief Description of recipe
  description: {
    type: String,
    default: "",
  },
  // Type of meal: Breakfast, Lunch, etc
  category: {
    type: String,
    default: "",
  },
  // Italian, Chinese, etc
  cuisine: {
    type: String,
    default: "",
  },
  // Time to prepare the recipe
  prep: {
    type: String,
    default: "",
  },
  // Time to cook the recipe
  cook: {
    type: String,
    default: "",
  },
  // Ingredients used in the recipe
  ingredients: [String],
  // Directions for the recipe
  directions: {
    type: String,
    default: "",
  },
  // Current date when recipe was posted
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  // Serving Size
  servings: {
    type: Number,
  },
});

const Recipes = mongoose.model("Recipes", recipeSchema);

module.exports = Recipes;
