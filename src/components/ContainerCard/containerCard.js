import React from "react";
import Button from 'react-bootstrap/Button';
import "./containerCard.css"

function ContainerCard({card},{index}) {
    return(

        <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="card receipe-card-noborder" key={index}>
            <img src={ card.img } className="card-img-top receipt-card-border" alt={ card.name }></img>
            
        </div>
        <div className="card-body">
                <a href="#"><h5 className="card-title">{ card.name }</h5></a>
        </div>
    </div>


    );
}

export default ContainerCard;