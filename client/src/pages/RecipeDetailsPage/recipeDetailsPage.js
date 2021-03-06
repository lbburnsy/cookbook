import React from "react";
import RecipeDetailSideBar from "../../components/RecipeDetailSideBar/recipeDetailSideBar";
import RecipeDetailsBody from "../../components/RecipeDetailsBody/recipeDetailsBody";
import "./recipeDetailsPage.css";
import Header from "../../components/Header/header";
import { useHistory } from "react-router-dom"



function RecipeDetailsPage(props) {
    const history =  useHistory()
    if (!props.recipe) {
        history.push("/")
    } 
    return (
        <div className="container">
            <Header title={props.recipe?.name} />
            <div className="row mt-5">
                <div className="col-lg-4">
                  <img src={props.recipe?.image?props.recipe?.image:'/assets/pexels-karolina-grabowska-4033296.jpg'} className="img" alt="nutty bar"></img>  
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