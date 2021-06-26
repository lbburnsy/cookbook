import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import SearchBar from 'react-js-search';
import API from "../../utils/API";
import './searchBox.css'



function SearchBox(props){
    
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }

  //how to set the state based on the text input
  //how to display stuff when the button is clicked



    return(
        <div className="searchbox">

           
                <SearchBar 
                onSearchTextChange={props.onText}
                onSearchButtonClick={props.onSearch}
                placeHolderText={"Search here..."}
                data={recipes}/>
          

        </div>
    )
}

export default SearchBox;