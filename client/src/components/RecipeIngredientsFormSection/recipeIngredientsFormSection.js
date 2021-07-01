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
            <div>

                <IngredientsList handleChange = {handleChange}
                        values = {values} />
            
                <Form className="form-width">
                   
        
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