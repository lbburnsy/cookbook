import React from "react";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";
import Filter from "../../components/Filter/filter";
import SearchBox from "../../components/SearchBox/searchBox";

import "./recipeSearchResults.css";

function RecipeSearchResults() {
  return (
    <div className="signup searchResultPage">
      <br />
      <SearchBox className="searchBox" />

      <Filter className="filterComponent" />

      {/* <FoodCardContainer className="recipeCards" /> */}
    </div>
  );
}

export default RecipeSearchResults;
