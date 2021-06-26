import React from 'react'
import RecipeCards from '../../components/RecipeCards/recipeCards'
import Filter from '../../components/Filter/filter'
import SearchBox from '../../components/SearchBox/searchBox'

import './recipeSearchResults.css'

function RecipeSearchResults(){
    return(
        <div className="signup searchResultPage">
            <br/>
            <SearchBox className="searchBox"/>

            <Filter className="filterComponent"/>
            
            <RecipeCards className="recipeCards" />
            
           

        </div>
    )
}

export default RecipeSearchResults