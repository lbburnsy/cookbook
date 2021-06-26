import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Form from 'react-bootstrap/Form';
import SearchBar from 'react-js-search';
import API from "../../utils/API";
import './searchBox.css'


// When the user do a search of a term the string typed will be 
// used as haystack and data passed as prop will be used for the 
// search. The search will be done looking at all values in object 
// and will return the term search used and an array of objects 
// that had a hit.




function SearchBox(){
    
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

            <Form>
                <SearchBar 
                onSearchTextChange={props.onText}
                onSearchButtonClick={props.onSearch}
                placeHolderText={"Search here..."}
                data={recipes}/>
            </Form>

        </div>
    )
}

export default SearchBox;