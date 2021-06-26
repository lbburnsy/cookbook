import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";



function Addrecipe() {
    return(
        <div className="container mt-5">
        <div className="row">
        <ProfileInfo />
        </div>
        <div className="row">
        <ProfileMainNav />
        </div>
        <div className="row">
            Add Recipes
        </div>
    </div>
    )
}

export default Addrecipe;