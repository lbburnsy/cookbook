import React from "react";
import "./recipeCards.css";

function RecipeCards() {

    const recipes = [
        {
            img: "/assets/pexels-ella-olsson-3026808.jpg",
            name: "pizza"
            
        },
        {
            img: "/assets/pexels-engin-akyurt-1435903.jpg",
            name: "pasta"
           
        },
        {
            img: "/assets/pexels-harry-dona-2412950.jpg",
            name: "cheese"
            
        },
        {
            img: "/assets/pexels-ben-1464601.jpg",
            name: "Salad"
            
        }

        
    ]

    const renderCard = (card, index) => {

        return(

                    <div className="col-lg-3 col-md-3 col-sm-12 recipeCard">
                        <div className="card recipe-card-noborder" key={index}>
                            <img src={ card.img } className="card-img-top recipe-card-border" alt={ card.name }></img>
                            
                        </div>
                        <div className="card-body">
                                <a href="#"><h5 className="card-title">{ card.name }</h5></a>
                        </div>
                    </div>
    
        )

    }

    return (
        <div className="recipeCards mt-5">
             <h2 className="text-center title">Featured</h2>
               
            <div className="container">
                    <div className="row my-5 recipes">
                      
                        {recipes.map(renderCard)}
                  
                    </div>
            </div>
        </div>

    );
   
}

export default RecipeCards;