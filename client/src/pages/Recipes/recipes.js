import React, { useState, useEffect } from "react";
import "./recipes.css";
import API from "../../utils/API";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Header from "../../components/Header/header";



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

  return (
    <div className="recipes">
      <Header title="Recipes"/>
      <FoodCardContainer recipes={recipes} />
    </div>
  );
}

export default Recipes;
