import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import Cookbook from "../Cookbook/cookbook";
import Favorite from "../Favorite/favorite";
import Home from "../Home/home";

function Addrecipe() {
    return(
        <div className="addrecipe">
            <div className="row">
                <div className="col-12 col-lg-4">
                <Sidebar pageName={"Add New Recipe"} />
             

                </div>

                <div className="col-12 col-lg-8">
                    <h1>Add Receipe</h1>

                </div>
            </div>
        
            

        </div>

    )
}

export default Addrecipe;