const sequelize = require("../config/connection");
const { User, Recipe } = require("../models");

const RecipeData = require("./RecipeData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const recipe of RecipeData) {
    await Recipe.create({
      ...recipe,
    });
  }
  process.exit(0);
};

seedDatabase();
