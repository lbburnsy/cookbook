import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class RecipeIngredientsFormSection extends Component {
    continue = event => {
        event.preventDefault();
            this.props.nextStep();
    };

    back = event => {
        event.preventDefault();
            this.props.previousStep();
    };

    render() {
        const  { values, handleChange } = this.props;
        return(
            <div>

<Form className="form-width">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>
    
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                        <Form.Control as="select">
                        <option>Category</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Snack</option>
                        <option>Dinner</option>
                        <option>Desert</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Cusine</Form.Label>
                        <Form.Control as="select">
                        <option>American</option>
                        <option>Indian</option>
                        <option>Chinese</option>
                        <option>Greek</option>
                        <option>Italian</option>
                        <option>Egyptian</option>
                        </Form.Control>
                </Form.Group>
               
                <Form.Group controlId="formBascDate">
                    <Form.Label>Date Added</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date" />
                </Form.Group>
                <Button variant="primary" type="back" onClick={this.back}>
                        Go Back
                </Button>
                <Button variant="primary" type="continue" onClick={this.continue}>
                        Continue
                </Button>
            </Form>

            </div>
        )
    }
}

export default RecipeIngredientsFormSection;