import React from "react";
import RecipeDetailSideBar from "../../components/RecipeDetailSideBar/recipeDetailSideBar";

function RecipeDetailsPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                 <img src="https://images.kitchenstories.io/communityImages/c0b4b1026931ea2b0659b264f87dfefc_d1878d04-5876-406c-93ef-94b5a55af7cd.jpg" className="img" alt="nutty bar"></img> 
                <RecipeDetailSideBar/>    
                </div>
                <div className="col-lg-8">
                    
                </div>
            </div>

        </div>
    )
}

export default RecipeDetailsPage;