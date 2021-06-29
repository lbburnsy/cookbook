import React from "react";
import "./FoodCardContainer.css";
import FoodCardBody from "./FoodCardBody";

function FoodCardContainer(props) {
  return (
      <div className="container-fluid mt-5">
        <div className="row my-5 recipes">
          {props.recipes.map((recipe, index) => (
            <FoodCardBody key={index} img={recipe.image} name={recipe.name} />
          ))}
        </div>
      </div>
  );
}

export default FoodCardContainer;
