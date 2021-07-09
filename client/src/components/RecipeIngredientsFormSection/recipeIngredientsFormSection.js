import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import IngredientsList from "../IngredientsList/ingredientsList";


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
        const { values, handleChange } = this.props;
        
        return(
            <div className="px-5 shadow-lg p-3 mb-5 bg-body rounded">

                <h2 className="m-5 text-center">Ingredients</h2>

                <IngredientsList handleChange = {handleChange}
                        values = {values} />
            
                <Form className="form-width">
                   
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button className="m-2" variant="primary" type="back" onClick={this.back}>
                            Go Back
                    </Button>
                    <Button  className="m-2"variant="primary" type="continue" onClick={this.continue}>
                            Continue
                    </Button>
                    </div>
                </Form>

            

            </div>

            
            

            
        )

        
    }

    
}

export default RecipeIngredientsFormSection;