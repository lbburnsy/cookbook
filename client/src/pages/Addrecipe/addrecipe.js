import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";
import AddRecipeForm from "../../components/AddRecipeForm/addRecipeForm";



function Addrecipe() {
    return(
        <div className="container mt-5">
        <div className="row">
            <ProfileInfo />
        </div>
        <div className="row">
            <ProfileMainNav />
        </div>
        <div className="row flex-column">
         <AddRecipeForm />
        </div>
    </div>
    )
}

export default Addrecipe;