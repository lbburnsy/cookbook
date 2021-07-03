import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import SearchBar from 'react-js-search';
import { useHistory } from "react-router-dom";

import './searchBox.css'


// had a problem with figuring out how this is filtered / search will be done looking at all values in objects


function SearchBox(props){
    
  const history = useHistory();  


  const onSearch = (text, hits) => {
  props.onSearch(text, hits)
  history.push(`/recipesearchresults/`)
 

}
const resetText = () => {
  const form = document.getElementsByClassName("search-container");
  const input = (form[0].children[0]);
  input.value = "";
}
  const onSubmit = (e) => {
    e.preventDefault();
    props.onText();
    resetText()
  }
    return(
        <form className="searchbox py-2" onSubmit= {onSubmit}>

           
                <SearchBar 
                id= "hello"
                // caseInsensitive = {false}
                // ^ this prop does not work
                onSearchTextChange={props.onText}
                // everytime you type a letter a change is triggred only in filter component
                onSearchButtonClick={onSearch}
                placeHolderText={"Search here..."}
                data={props.recipes}
                />
          

        </form>
    )
}

export default SearchBox;

// react-js-search is a really buggy npm package 