import React from "react";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Filter from "../../components/Filter/filter";
import SearchBox from "../../components/SearchBox/searchBox";

import "./recipeSearchResults.css";
import { propTypes } from "react-bootstrap/esm/Image";

function RecipeSearchResults(props) {
  return (
    <div className="container-fluid">
       <h1>Recipe Search Result Page</h1>
      <br />
      {/* <SearchBox className="searchBox" onSearch={} onText={}/> */}
      <div className="row">
<div className="col-12 col-md-4">
      <Filter className="filterComponent" onChange={props.onFilterChange}/>
      </div>
      <div className="col-12 col-md-8">
      <FoodCardContainer className="recipeCards" recipes={props.recipes} itemColClass={"col-12 col-md-4"}/>
      </div>
      </div>
    </div>
  );
}

export default RecipeSearchResults;
