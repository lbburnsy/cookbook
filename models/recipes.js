const mongoose = require("mongoose");

const recipe = new mongoose.Schema({
    recipeId: {
        type: String,
    },
    userId: {
        type: String
    },
    recipeName: {
        type: String,
        required: true,
      },
      // url string for thumbnail image
      image: {
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
      prepTimeHours: {
        type: String,
        default: "",
      },
        // Time to prepare the recipe
        prepTimeMinutes: {
          type: String,
          default: "",
        },
      // Time to cook the recipe
      cookingTimeHours: {
        type: String,
        default: "",
      },
      cookingTimeMinutes: {
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
      
      // Serving Size
      servings: {
        type: String,
      },
      // Current date when recipe was posted
      dateAdded: {
        type: Date,
        default: Date.now,
      }


})

module.exports = mongoose.model("recipe", recipe);