import React, { Component } from "react";
import "./favorite.css";

export class  Favorite extends Component {
    addtoFavorite(id,e) {
        e.preventDefault();
        console.log("I'm in add to Favorite event");
        console.log(e);
        // this.props.values.ingredients.splice(index, 1);
        // this.setState({[this.state.amount]:""});
         //console.log(amount);
        // console.log(amount1);
        // console.log(unit);
        // console.log(ingredient);


            // this.props.values.ingredients.push({Amount: this.state.amount,
            //     Amount1: this.state.amount1,
            //     Unit: this.state.unit,
       
            //     Ingredient: this.state.ingredient,
            //     });
            //    this.setState({[this.state.amount]:""});
    };
    render() {
        const { prop } = this.props;
    return(
        <>
            {/* <i className="fa fa-heart" onClick={(e) => this.addtoFavorite(prop.id, e)}></i> */}
            <i className="fa fa-heart" onClick={(e) => this.addtoFavorite(0, e)}></i>
        </>

    )
    }
}

export default Favorite;