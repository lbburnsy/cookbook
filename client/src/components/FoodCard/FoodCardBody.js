import React from "react";

function FoodCardBody(props) {
  return (
    <div className="col-lg-3 col-md-3 col-sm-12 recipeCard">
      <div className="card recipe-card-noborder">
        <img
          src={props.img}
          className="card-img-top recipe-card-border"
          alt={props.name}
        ></img>
      </div>
      <div className="card-body">
        <a href={props.name}>
          <h5 className="card-title">{props.name}</h5>
        </a>
      </div>
    </div>
  );
}

export default FoodCardBody;
