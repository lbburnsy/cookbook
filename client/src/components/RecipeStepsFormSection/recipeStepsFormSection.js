import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class RecipeStepsFormSection extends Component {
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
            <div className="px-5 shadow-lg p-3 mb-5 bg-body rounded">

                <Form className="form-width mt-5">

                <h2 className="text-center">Steps</h2>
    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="font">Directions</Form.Label>
                        <Form.Control onChange={handleChange('directions')}
                        defaultValue={values.directions} as="textarea" rows={10} />
                    </Form.Group>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button className="m-2" variant="primary" type="back" onClick={this.back}>
                        Go Back
                    </Button>
                    <Button className="m-2" variant="primary" type="continue" onClick={this.continue}>
                        Continue
                    </Button>
                    </div>
                </Form>


            </div>               

        )
    }
}

export default RecipeStepsFormSection;




