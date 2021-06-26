import React from "react";
import "./FoodCardContainer.css";
import FoodCardBody from "./FoodCardBody";

function FoodCardContainer(props) {
  return (
    <div className="recipeCards mt-5">
      <div className="container">
        <div className="row my-5 recipes">
          {props.recipes.map((recipe) => (
            <FoodCardBody img={recipe.image} name={recipe.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodCardContainer;
