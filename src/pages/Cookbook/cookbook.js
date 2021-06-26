import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";


function Cookbook() {
    return(
        <div className="container mt-5">
            <div className="row">
            <ProfileInfo></ProfileInfo>
            </div>
            <div className="row">
            <ProfileMainNav></ProfileMainNav>
            </div>
            <div className="row">
                Cook Book
            </div>
        </div>

    )
}

export default Cookbook;