import React from "react";
import RecipeDetailSideBar from "../../components/RecipeDetailSideBar/recipeDetailSideBar";
import RecipeDetailsBody from "../../components/RecipeDetailsBody/recipeDetailsBody";
import "./recipeDetailsPage.css";
import Header from "../../components/Header/header";

function RecipeDetailsPage(props) {
    return (
        <div className="container mt-5">
            <Header title="Recipe Details Page" />
            <div className="row">
                <div className="col-lg-4">
                  <img src="https://images.kitchenstories.io/communityImages/c0b4b1026931ea2b0659b264f87dfefc_d1878d04-5876-406c-93ef-94b5a55af7cd.jpg" className="img" alt="nutty bar"></img>  
                <RecipeDetailSideBar recipe={props.recipe}/>    
                </div>
                <div className="col-lg-8">
                <RecipeDetailsBody recipe={props.recipe}/> 
                </div>
            </div>

        </div>
    );
}

export default RecipeDetailsPage;