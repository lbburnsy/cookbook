import React from "react";
import ProfileMainNav from "../../components/ProfileMainNav/profileMainNav";
import ProfileInfo from "../../components/ProfileInfo/profileInfo";

function ProfilePage() {
    return(
        <>

        <div className="container mt-5">
            <div className="row">
            <ProfileInfo />
            </div>
            <div className="row">
            <ProfileMainNav />
            </div>
            <div className="row">
                Overview Information
            </div>

        </div>
       
  

        
</>
        


    )
}

export default ProfilePage;