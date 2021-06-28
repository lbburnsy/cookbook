import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import SearchBar from 'react-js-search';
import { useHistory } from "react-router-dom";

import './searchBox.css'


// had a problem with figuring out how this is filtered / search will be done looking at all values in objects


function SearchBox(props){
    
  const history = useHistory();  

  //how to set the state based on the text input
  //how to display stuff when the button is clicked
const onSearch = (text) => {
  props.onSearch(text)
  history.push(`/recipesearchresults/`)

}
  
    return(
        <div className="searchbox">

           
                <SearchBar 
                onSearchTextChange={props.onText}
                // everytime you type a letter a change is triggred 
                onSearchButtonClick={onSearch}
                placeHolderText={"Search here..."}
                data={props.recipes}
                />
          

        </div>
    )
}

export default SearchBox;