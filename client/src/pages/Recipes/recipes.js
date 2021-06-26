import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import API from "../../utils/API";
import RecipeCards from "../../components/RecipeCards/recipeCards"
=======
>>>>>>> main
import "./recipes.css";
import API from "../../utils/API";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";



function Recipes() {
<<<<<<< HEAD
    const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }
    return(
        <div className="recipes">
            <h1 className= "text-center">Recipes</h1>
           {recipes.map((recipe) => (
        <RecipeCards img={recipe.image} name={recipe.name} id={recipe.id} />
      ))}
=======
  const [recipes, setRecipes] = useState([]);
>>>>>>> main

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="recipes">
      <h1>Recipes Page</h1>
      <FoodCardContainer recipes={recipes} />
    </div>
  );
}

<<<<<<< HEAD
export default Recipes; 

=======
export default Recipes;
>>>>>>> main
