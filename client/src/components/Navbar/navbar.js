import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/searchBox"
function Navbar(props){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <span className="navbar-brand" href="#">Logo</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to="/">
                        <li className="nav-item">
                        <span className="nav-link active" aria-current="page" href="#">Home</span>
                        </li>
                    </Link>
                    <Link to="/recipes">
                        <li className="nav-item">
                        <span className="nav-link active" href="#">Recipes</span>
                        </li>
                    </Link>
                    <Link to="/categories">
                        <li className="nav-item">
                        <span className="nav-link active" href="#">Categories</span>
                        </li>
                    </Link>
                    <Link to="/signup">
                        <li className="nav-item">
                        <span className="nav-link active" href="#">Signup</span>
                        </li>
                    </Link>
                    <Link to="/login">
                        <li className="nav-item">
                        <span className="nav-link active" href="#">Login</span>
                        </li>
                    </Link>
                    <Link to="/profile">
                        <li className="nav-item">
                        <span className="nav-link active" href="#">Profile</span>
                        </li>
                    </Link>
                    <Link to="/recipesearchresults">
                        <li className="nav-item">
                        <span className="nav-link active" aria-current="page" href="#">Recipe Search Results</span>
                        </li>
                    </Link>
                    <Link to="/recipedetailspage">
                        <li className="nav-item">
                        <span className="nav-link active" aria-current="page" href="#">Recipe Details Page</span>
                        </li>
                    </Link>
                </ul>
                
                <SearchBox onSearch={props.onSearch} onText={props.onText} recipes={props.recipes}/>
                    {/* <input className="form-control me-2" type="search" placeholder="Recipe search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">Search</button> */}
                
                
                </div>
            </div>
        </nav>
       

    )
}

export default Navbar;