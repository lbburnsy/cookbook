import React, { Component } from "react";
import UploadImage from "../UploadImage/uploadImage";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";




export class RecipeBasicsFormSection extends Component {
    continue = event => {
        event.preventDefault();
            this.props.nextStep();
    };
    render() {
        const  { values, handleChange } = this.props;
        return(
            <div>
                <UploadImage />

                <Form className="form-width mt-5">
    
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name Your Recipe</Form.Label>
                        <Form.Control onChange = { handleChange ("recipeName")} defaultValues = {values.recipeName} type="text" placeholder="Recipe name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Number of Servings</Form.Label>
                            <Form.Control as="select">
                            <option>Servings</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                    </Form.Group>
                    
                    <Form.Label>Cooking Time</Form.Label>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridHours">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>1</option>
                            <option>2</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMinutes">
                        <Form.Label>Minutes</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>5</option>
                            <option>10</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="continue" onClick={this.continue}>
                        Continue
                    </Button>
                </Form>


            </div>               

        )
    }
}

export default RecipeBasicsFormSection;


