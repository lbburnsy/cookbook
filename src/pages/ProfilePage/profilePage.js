import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/sidebar";

import Home from "../Home/home";

function ProfilePage() {
    return(
        <>
       
        <div className="profilePage">
            <div className="row">
                <div className="col-12 col-lg-4">
                <Sidebar />
             

                </div>

                <div className="col-12 col-lg-8">
                    <h1>Hello World</h1>

                </div>
            </div>
        
            

        </div>

        
</>
        


    )
}

export default ProfilePage;