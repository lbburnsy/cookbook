import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import Addrecipe from "../Addrecipe/addrecipe";
import Favorite from "../Favorite/favorite";
import Home from "../Home/home";

function Cookbook() {
    return(
        <div className="cookbook">
            <div className="row">
                <div className="col-12 col-lg-4">
                
            <Sidebar pageName={"Cook Book"}/>
                </div>

                <div className="col-12 col-lg-8">
                    <h1>cook book</h1>

                </div>
            </div>
        
            

        </div>

    )
}

export default Cookbook;