import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class ConfirmRecipeForm extends Component {
    continue = event => {
        event.preventDefault();
        // Process form (send data to the database to save it)
            this.props.nextStep();
    };
    back = event => {
        event.preventDefault();
            this.props.previousStep();
    };
    
    render() {
        const  { values: { recipeName, category, cusine, cookingTime, ingredients, directions, servings } } = this.props;
        return(
            <div>

                <Alert variant="success">
                    <Alert.Heading>Confirm Your Recipe!</Alert.Heading>
                    <ListGroup>
                        <ListGroup.Item text={ recipeName }>Recipe Name</ListGroup.Item>
                        <ListGroup.Item text={ category }>Category</ListGroup.Item>
                        <ListGroup.Item text={ cusine }>Cuisine</ListGroup.Item>
                        <ListGroup.Item text={ cookingTime }>Cooking Time</ListGroup.Item>
                        <ListGroup.Item text={ ingredients }>Ingredients</ListGroup.Item>                        <ListGroup.Item text={ recipeName }>Vestibulum at eros</ListGroup.Item>
                        <ListGroup.Item text={ directions }>Directions</ListGroup.Item>
                        <ListGroup.Item text={ servings }>Number of servings</ListGroup.Item>
                    </ListGroup>
                    <hr />
                    
                </Alert>

                <Button className="m-2" variant="primary" type="confirm" onClick={this.continue}>
                        Confirm
                </Button>
                <Button className="m-2" variant="primary" type="back" onClick={this.back}>
                        Go Back
                </Button>
                
            </div>               

        )
    }
}

export default ConfirmRecipeForm;





