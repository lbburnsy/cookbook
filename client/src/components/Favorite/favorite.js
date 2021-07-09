import React, { Component } from "react";
import "./favorite.css";
import axios from 'axios'
import API from "../../utils/API";

export class  Favorite extends Component {
    addtoFavorite(recipeId,e) {
        e.preventDefault();
        console.log("I'm in add to Favorite event");
        console.log(e);
        // this.props.values.ingredients.splice(index, 1);
        // this.setState({[this.state.amount]:""});
         //console.log(amount);
        // console.log(amount1);
        // console.log(unit);
        // console.log(ingredient);
        const favorite={
            recipeId:recipeId,
            userid:this.props.user.userid

        }
        API.addtoFavorite(favorite)
        .then(response =>{ console.log(response.data);  })
        
        console.log("I'v finished posting favorite");


            // this.props.values.ingredients.push({Amount: this.state.amount,
            //     Amount1: this.state.amount1,
            //     Unit: this.state.unit,
       
            //     Ingredient: this.state.ingredient,
            //     });
            //    this.setState({[this.state.amount]:""});
    };
    render() {
       // const { props } = this.props;
        const isLoggedIn = this.props.user && this.props.user.userid && this.props.user.userid!="";
        let favButton;
        if (isLoggedIn) {
            favButton= <i className="fa fa-heart" onClick={(e) => this.addtoFavorite(this.props.recipeId, e)}></i>
    
        }
        else
        {
            favButton="";
        }
        
    return(
        <>
        {favButton}
            {/* <i className="fa fa-heart" onClick={(e) => this.addtoFavorite(prop.id, e)}></i> */}
               </>

    )
    }
}

export default Favorite;