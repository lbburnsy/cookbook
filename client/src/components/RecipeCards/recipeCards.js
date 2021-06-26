import React from "react";
import "./recipeCards.css";

function RecipeCards(props) {
  return (
    <div className="recipeCards mt-5">
      <div className="container">
        <div className="row my-5 recipes">
          <div className="col-lg-3 col-md-3 col-sm-12 recipeCard">
            <div className="card recipe-card-noborder">
              <img
                src={props.img}
                className="card-img-top recipe-card-border"
                alt={props.name}
              ></img>
            </div>
            <div className="card-body">
              <a href="#">
                <h5 className="card-title">{props.name}</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCards;
