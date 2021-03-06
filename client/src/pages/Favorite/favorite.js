import React, { useState, useEffect } from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";
import axios from "axios";
import API from "../../utils/API";
// import Recipes from "../../utils/recipes.json";
import FoodCardContainer from "../../components/FoodCard/FoodCardContainer";


function Favorite(props) {
    const [favoriteRecipes,getfavoriteRecipes ]=useState('');
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
       
        loadRecipes();
       
   }, []);
   function loadRecipes() {
    API.getRecipes()
      .then((res) =>{ setRecipes(res.data);  getFavoriteRecipes(res.data);})
      .catch((err) => console.log(err));
  }
   const getFavoriteRecipes=(recipeslocal)=> {
    axios.post("https://infinite-citadel-91130.herokuapp.com/app/getfavorites", {userId:props.user.userid})
    .then(response =>{ 
        const allRecipes=[];
        const favoriteRecipes=Array.from(response.data);
        console.log("No of recipes:"+recipeslocal.length);
        console.log("No of favs:"+favoriteRecipes.length)
        for(var i=0;i<recipeslocal.length;i++)
        {
            for(var j=0;j<favoriteRecipes.length;j++)
            {
                if(recipeslocal[i].recipeId==favoriteRecipes[j].recipeId)
                allRecipes.push(recipeslocal[i]);

            }
        }
        
        getfavoriteRecipes(allRecipes);
        console.log(response.data); 
       

    }).catch(error => console.error(`Error: ${error}`));
   }
    return(
        
        <div className="container mt-5">
        <div className="row">
        <ProfileInfo user={props.user}></ProfileInfo>
        </div>
        <div className="row">
        <ProfileMainNav></ProfileMainNav>
        </div>
        <div className="row">
        <FoodCardContainer onRecipeClick={props.onRecipeClick} recipes={Array.from(favoriteRecipes)} itemColClass={"col-lg-3 col-md-3 col-sm-12"}></FoodCardContainer>
           
        </div>
    </div>

    )
}

export default Favorite;