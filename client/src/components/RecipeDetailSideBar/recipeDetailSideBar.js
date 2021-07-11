import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./recipeDetailSideBar.css"
function RecipeDetailSideBar(props) {
    return(
        <div className="RecipeDetailSideBar">
            <Card style={{ width: '18rem', border:'none'}}>
            <ListGroup className="itemList" variant="flush">
              <ListGroup.Item>Category: {props.recipe?.category}</ListGroup.Item>
              <ListGroup.Item>Cuisine: {props.recipe?.cuisine}</ListGroup.Item>
              <ListGroup.Item>Prep:</ListGroup.Item>
              <ListGroup.Item>Cook: {props.recipe?.cook}</ListGroup.Item>
              <ListGroup.Item>Servings: {props.recipe?.servings}</ListGroup.Item>
              {/* <ListGroup.Item>Date Added: </ListGroup.Item> */}
            </ListGroup>
          </Card>
        </div>
    );
};
export default RecipeDetailSideBar;