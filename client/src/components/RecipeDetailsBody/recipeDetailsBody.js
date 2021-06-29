import React from "react";
import Card from "react-bootstrap/Card";
function RecipeDetailsBody() {
    return(
        <div className="RecipeDetailSideBar">
           <Card>
            <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                <Card.Text>
                <ol>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </li>
                </ol>
                </Card.Text>
            
            

            <Card.Title>Directions</Card.Title>
                <Card.Text>
                <ol>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </li>
                </ol>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
}
export default RecipeDetailsBody;