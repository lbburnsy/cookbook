import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../../utils/API";
import axios from 'axios'
import {  Switch, Route, useHistory } from "react-router-dom";

export class SuccessRecipeForm extends Component {
    
    continue = event => {
        event.preventDefault();
       console.log("Im successfull");
        console.log(this.props.recipeName);
        // Process form (send data to the database to save it)
           // this.props.nextStep();
    };
    insertRecipe(id,e,values,userId)
    {
        e.preventDefault();
        console.log(values);
        const recipe = {
            userId:userId,
            recipeName:values.recipeName,
            category :values.category, 
            cuisine :values.cuisine, 
            prepTimeHours:values.prepTimeHours, 
            prepTimeMinutes :values.prepTimeMinutes, 
            cookingTimeHours:values.cookingTimeHours, 
            cookingTimeMinutes:values.cookingTimeMinutes, 
            ingredients:JSON.stringify(values.ingredients),
            directions :values.directions, 
            servings :values.servings
          
        }
        this.props.history.push('/cookbook');
        

        API.AddRecipe(recipe)
        .then(response =>{ console.log(response.data);  })
        

    }
    render() {
        const  { 
            values: { recipeName, category, cuisine, prepTimeHours, prepTimeMinutes, cookingTimeHours, cookingTimeMinutes, ingredients, directions, servings } 
        } = this.props;
        return(
            <div>
    
            <Alert variant="success">
                Congratulations on Adding your recipe
            </Alert>
    
    {/* This needs to be handled so that it can save the recipe as a final step, i am commenting it out now becuse once i click it, it causes an error */}
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">

            <Button className="m-2" variant="primary" type="confirm" onClick={(e) => this.insertRecipe(0,e, this.props.values,this.props.user.userid)}>
                            Done and view cookbook
            </Button>
            </div>
    
            </div>
        )

    }
   
}

export default SuccessRecipeForm;