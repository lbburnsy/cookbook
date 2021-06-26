import React from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import Filter from "../../components/Filter/filter";
import SearchBox from "../../components/SearchBox/searchBox";

import "./recipeSearchResults.css";

function RecipeSearchResults() {
  return (
    <div className="signup searchResultPage">
      <br />
      <SearchBox className="searchBox" />

      <Filter className="filterComponent" />

      <FoodCard className="recipeCards" />
    </div>
  );
}

export default RecipeSearchResults;
