import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import UploadImage from "../UploadImage/uploadImage";
import "./addRecipeForm.css";

function AddRecipeForm() {
    return(
        <>

<UploadImage />


<Form className="form-width">
    
    <Form.Group controlId="formBasicName">
        <Form.Label>Name Your Recipe</Form.Label>
        <Form.Control type="text" placeholder="Recipe name" />
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

    <Form.Label>Cooking Time</Form.Label>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridHours">
        <Form.Label>Hours</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
        </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMinutes">
        <Form.Label>Minutes</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
        </Form.Control>
        </Form.Group>
    </Form.Row>

    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control as="textarea" rows={10} />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control as="textarea" rows={20} />
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

    <Form.Group controlId="formBascDate">
        <Form.Label>Date Added</Form.Label>
        <Form.Control type="date" placeholder="Enter Date" />
    </Form.Group>
</Form>

</>


    )
}

export default AddRecipeForm;