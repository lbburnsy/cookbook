import React from "react";
import "./FoodCardContainer.css";
import Favorite from "../Favorite/favorite";


function FoodCardBody(props) {
  return (  
    
    <div className={props.itemColClass} onClick={props.onRecipeClick}>
       {/* <Favorite id={props.id} /> */}
      <Favorite  />
      <div className="card border-0" >
        <img
          src={props.img}
          className="card-img-top"
          alt={props.name}>
          </img>
      </div>
      <div className="card-body" >
        <a href={props.name}>
          <h5 className="card-title">{props.name}</h5>
        </a>
      </div>
    </div>
  );
}

export default FoodCardBody;
