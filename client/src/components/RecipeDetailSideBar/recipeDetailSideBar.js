import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function RecipeDetailSideBar() {
    return(
        <div className="RecipeDetailSideBar">
            <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Category:</ListGroup.Item>
              <ListGroup.Item>Cuisine:</ListGroup.Item>
              <ListGroup.Item>Prep:</ListGroup.Item>
              <ListGroup.Item>Cook:</ListGroup.Item>
              <ListGroup.Item>Serving:</ListGroup.Item>
              <ListGroup.Item>Date Added:</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
    );
};
export default RecipeDetailSideBar;