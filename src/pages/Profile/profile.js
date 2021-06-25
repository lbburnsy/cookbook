import React, { useState } from "react";
import "./profile.css";

function Profile() {

        const [name, setName] = useState("Your Name");

    return(
       <div className="profile">
           <div className="container-fluid upper">
                   <div className="image-container d-flex flex-row">
                       <img src="/assets/pexels-pixabay-220453.jpg" className="mx-auto img-fluid" alt="" height="100px" width="100px" />
                   </div>
            <div className="container-fluid lower mt-5">
                <h3> { name } </h3>
            </div>
           </div>
       </div>

    )
}

export default Profile;
