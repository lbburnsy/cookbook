import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import RecipeCards from "../../components/RecipeCards/recipeCards"
import "./recipes.css";



function Recipes() {
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

        </div>

    )
}

export default Recipes; 

