import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";
import Cookbook from "../Cookbook/cookbook";
import Addrecipe from "../Addrecipe/addrecipe";
import Home from "../Home/home";

function Favorite() {
    return(
        <div className="favorite">
            <div className="row">
                <div className="col-12 col-lg-4">
               
            <Sidebar  pageName={"Favorite Recipe"}/>
                </div>

                <div className="col-12 col-lg-8">
                    <h1>Favorite Receipes</h1>

                </div>
            </div>
        
            

        </div>

    )
}

export default Favorite;