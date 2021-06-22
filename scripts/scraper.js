const recipeScraper = require("recipe-scraper");

recipeScraper(
  "https://www.kitchenstories.com/en/recipes/cinnamon-roll-pancakes-7f45"
)
  .then((recipe) => console.log(recipe))
  .catch((err) => console.err(err));
