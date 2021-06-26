import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";


function Favorite() {
    return(
        <div className="container mt-5">
        <div className="row">
        <ProfileInfo></ProfileInfo>
        </div>
        <div className="row">
        <ProfileMainNav></ProfileMainNav>
        </div>
        <div className="row">
            Favorite
        </div>
    </div>

    )
}

export default Favorite;