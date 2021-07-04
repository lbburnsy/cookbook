import React from "react";
import "./FoodCardContainer.css";
import FoodCardBody from "./FoodCardBody";

function FoodCardContainer(props) {
  return (
     
        <div className="container">
            <div className="row my-5 px-4">
              {props.recipes.map((recipe, index) => (
                <FoodCardBody key={index} img={recipe.image} name={recipe.name} itemColClass={props.itemColClass}/>
              ))}
            </div>
        </div>
        
     
  );
}

export default FoodCardContainer;
