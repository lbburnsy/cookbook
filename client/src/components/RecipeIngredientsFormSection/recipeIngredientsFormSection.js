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
                    <Form.Label className="font">Ingredients</Form.Label>
                    <Form.Control as="textarea" rows={10} />
                </Form.Group>
    
                <Button className="m-2" variant="primary" type="back" onClick={this.back}>
                        Go Back
                </Button>
                <Button  className="m-2"variant="primary" type="continue" onClick={this.continue}>
                        Continue
                </Button>
            </Form>

            </div>
        )
    }
}

export default RecipeIngredientsFormSection;