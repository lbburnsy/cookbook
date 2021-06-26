import React from "react";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Filter from "../../components/Filter/filter";
import SearchBox from "../../components/SearchBox/searchBox";

import "./recipeSearchResults.css";
import { propTypes } from "react-bootstrap/esm/Image";

function RecipeSearchResults() {
  return (
    <div className="searchResultPage">
       <h1>Recipe Search Result Page</h1>
      <br />
      {/* <SearchBox className="searchBox" onSearch={} onText={}/> */}

      <Filter className="filterComponent" />

      {/* <FoodCardContainer className="recipeCards" /> */}
    </div>
  );
}

export default RecipeSearchResults;
