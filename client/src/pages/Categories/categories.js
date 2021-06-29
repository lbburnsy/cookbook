import React from "react";
import Categories from "../../utils/categories.json";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";

function CategoriesPage() {
  return (
    <div className="signup">
      <h1>Categories</h1>
      <FoodCardContainer recipes={Categories} />
    </div>
  );
}

export default CategoriesPage;
