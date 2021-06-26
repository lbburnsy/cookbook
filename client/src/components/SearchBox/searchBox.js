import React from "react";
import Form from 'react-bootstrap/Form';
import SearchBar from 'react-js-search';

import './searchBox.css'

[
   { } 
]

// When the user do a search of a term the string typed will be used as haystack and data passed as prop will be used for the search. The search will be done looking at all values in object and will return the term search used and an array of objects that had a hit.


{/* <SearchBar 
    onSearchTextChange={ (term,hits) => {this.onSearchChange(term,hits)}}
    onSearchButtonClick={this.onSearchClick}
    placeHolderText={"Search here..."}
data={this.state.dataObjects}
/> */}

function SearchBox(){
    return(
        <div className="searchbox">

            <Form>
            <Form.Control type="text" placeholder="Search" />
            </Form>

        </div>
    )
}

export default SearchBox;