import React from "react";
import ContainerCard from "../ContainerCard/containerCard";

import "./cardList.css"

function CardList({results},{heading}) {
    const renderCard = (card, index) => {

        return(
            <ContainerCard card={card} index={index}/>

               
        )

    }
    return (
        <div className="categoriesCards">
             <h2 className="text-center title">{heading}</h2>
               
            <div className="container ">
                    <div className="row my-5 categoriesCardsRow">
                      
                        {results.map(renderCard)}
                  
                    </div>
            </div>
        </div>

    );
}

export default CardList;