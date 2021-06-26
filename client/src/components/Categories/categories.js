import React from "react";

function Categories() {

    const categoriesList = [
        {
            img: "/assets/pexels-sydney-troxell-718739.jpg",
            categoryname: "Breakfast"
        },

        {
            img: "/assets/pexels-ella-olsson-1640769.jpg",
            categoryname: "Lunch"
        },

        {
            img: "/assets/pexels-kyle-roxas-2122278.jpg",
            categoryname: "Snacks"
        },

        {
            img: "/assets/pexels-snapwire-675951.jpg",
            categoryname: "Dinner"
        }
        
    ]

    const renderCard = (card, index) => {

        return(

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="card receipe-card-noborder" key={index}>
                            <img src={ card.img } className="card-img-top receipt-card-border" alt={ card.name }></img>
                            
                        </div>
                        <div className="card-body">
                                <a href="#"><h5 className="card-title">{ card.categoryname }</h5></a>
                        </div>
                    </div>
    
        )

    }

    return (
        <div className="categoriesCards">
             <h2 className="text-center title">Categories</h2>
               
            <div className="container ">
                    <div className="row my-5 categoriesCardsRow">
                      
                        {categoriesList.map(renderCard)}
                  
                    </div>
            </div>
        </div>

    );
   
}

export default Categories;
