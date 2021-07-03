import React from "react";
import "./FoodCardContainer.css";
import Favorite from "../Favorite/favorite";


function FoodCardBody(props) {
  return (  
    
    <div className={props.itemColClass}>
       {/* <Favorite id={props.id} /> */}
      <Favorite  />
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
