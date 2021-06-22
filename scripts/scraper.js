const recipeScraper = require("recipe-scraper");

recipeScraper(
  "https://www.kitchenstories.com/en/recipes/cheesy-cauliflower-pizza-with-shaved-asparagus"
)
  .then((recipe) => console.log(recipe))
  .catch((err) => console.err(err));
