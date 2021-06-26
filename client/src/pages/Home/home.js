import React from "react";
import Hero from "../../components/Hero/hero";
import RecipeCards from "../../components/RecipeCards/recipeCards";
import Categories from "../../components/Categories/categories";

function Home(){
    return(
        <div className="home">
            <Hero />
            <RecipeCards />
            <Categories />

        </div>
    )
}

export default Home;