import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/hero";
import RecipeCards from "../../components/RecipeCards/recipeCards";
import Categories from "../../components/Categories/categories";
import API from "../../utils/API";

function Home() {
  //   const recipes = [
  //     {
  //       img: "/assets/pexels-ella-olsson-3026808.jpg",
  //       name: "pizza",
  //     },
  //     {
  //       img: "/assets/pexels-engin-akyurt-1435903.jpg",
  //       name: "pasta",
  //     },
  //     {
  //       img: "/assets/pexels-harry-dona-2412950.jpg",
  //       name: "cheese",
  //     },
  //     {
  //       img: "/assets/pexels-ben-1464601.jpg",
  //       name: "Salad",
  //     },
  //   ];
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
      {recipes.map((recipe) => (
        <RecipeCards img={recipe.image} name={recipe.name} id={recipe.id} />
      ))}
      <Categories />
    </div>
  );
}

export default Home;
