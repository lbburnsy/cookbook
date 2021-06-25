import React, { useEffect, useState } from "react";
import CardList from "../CardList/cardList";
import API from "../../utils/API"


function RecipeCards() {
    const [receipes, setReceipes] = useState([])
    useEffect(()=>
    {
        loadReceipes();
        

    },[]);
    function loadReceipes() {
        API.getRecipes()
          .then(res => 
            setReceipes(res.data)
          )
          .catch(err => console.log(err));
      };
   
    // const recipes = [
    //     {
    //         img: "/assets/pexels-ella-olsson-3026808.jpg",
    //         name: "pizza"
            
    //     },
    //     {
    //         img: "/assets/pexels-engin-akyurt-1435903.jpg",
    //         name: "pasta"
           
    //     },
    //     {
    //         img: "/assets/pexels-harry-dona-2412950.jpg",
    //         name: "cheese"
            
    //     },
    //     {
    //         img: "/assets/pexels-ben-1464601.jpg",
    //         name: "Salad"
            
    //     }

        
    // ]

    const heading="Receipes";

    return (
        
         <CardList results={receipes} title={heading}/>
        

    );
   
}

export default RecipeCards;