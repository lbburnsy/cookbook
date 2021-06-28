import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/hero";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import API from "../../utils/API";
import Categories from "../../../../categories.json";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="home">
      <Hero />
      <FoodCardContainer recipes={recipes} />
      {/* {recipes.slice(0, 4).map((recipe) => (
        <FoodCard img={recipe.image} name={recipe.name} id={recipe.id} />
      ))} */}
      <FoodCardContainer recipes={Categories} />
    </div>
  );
}

export default Home;
