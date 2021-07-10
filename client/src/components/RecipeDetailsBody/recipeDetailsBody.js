import React from "react";
import Card from "react-bootstrap/Card";
import "./recipeDetailsBody.css"
function RecipeDetailsBody(props) {
    return(
        <div className="RecipeDetailSideBar">
           <Card style= {{border:'none'}}>
            <Card.Body>
                <Card.Title className="fontStyle">Ingredients</Card.Title>
                <Card.Text>
                <ol>
                {props?.recipe?.directions?JSON.parse(props?.recipe?.ingredients[0]).map((ingredient,index)=>{ return(<li key={index}>{ingredient.Amount+" "+ingredient.Amount1+" "+ingredient.Unit+"      " +ingredient.Ingredient}</li>)}):props?.recipe?.ingredients.map((ingredient,index)=>{ return(<li key={index}>{ingredient}</li>)})}
                   
                    
                </ol>
                </Card.Text>
            
            

            <Card.Title className="fontStyle">Directions</Card.Title>
                <Card.Text>
                <ol>
                {props?.recipe?.instructions?props?.recipe?.instructions?.map((instruction, index) => {
                        return   <li key={index}>{instruction}</li>
                    }):props?.recipe?.directions}
                </ol>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}
export default RecipeDetailsBody;