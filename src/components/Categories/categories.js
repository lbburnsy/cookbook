import React, { useEffect, useState } from "react";
import CardList from "../CardList/cardList";
import API from "../../utils/API"


function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(()=>
    {
        loadCategories();
        

    },[]);
    function loadCategories() {
        // API.getRecipes()
        //   .then(res => 
        //     setCategories(res.data)
        //   )
        //   .catch(err => console.log(err));
      };
   
    
    // [
    //     {
    //         img: "/assets/pexels-sydney-troxell-718739.jpg",
    //         categoryname: "Breakfast"
    //     },

    //     {
    //         img: "/assets/pexels-ella-olsson-1640769.jpg",
    //         categoryname: "Lunch"
    //     },

    //     {
    //         img: "/assets/pexels-kyle-roxas-2122278.jpg",
    //         categoryname: "Snacks"
    //     },

    //     {
    //         img: "/assets/pexels-snapwire-675951.jpg",
    //         categoryname: "Dinner"
    //     }
        
    // ]

    

    const heading="Categories";
    return (
<div></div>
        // <CardList results={categories} heading={heading}/>

    );
   
}

export default Categories;
