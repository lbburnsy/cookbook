import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

export class SuccessRecipeForm extends Component {
    continue = event => {
        event.preventDefault();
        // Process form (send data to the database to save it)
            this.props.nextStep();
    };
    render() {
        return(
            <div>
    
            <Alert variant="success">
                Congratulations on Adding your recipe
            </Alert>
    
    {/* This needs to be handled so that it can save the recipe as a final step, i am commenting it out now becuse once i click it, it causes an error */}
            {/* <Button className="m-2" variant="primary" type="confirm" onClick={this.continue}>
                            Finish
                    </Button> */}
    
            </div>
        )

    }
   
}

export default SuccessRecipeForm;