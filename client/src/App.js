import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import Recipes from "./pages/Recipes/recipes";
import Signup from "./components/Signup/signup";
import Login from "./pages/Login/login";
import RecipeSearchResults from './pages/RecipeSearchResults/recipeSearchResults';
import ProfilePage from "./pages/ProfilePage/profilePage"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookbook from "./pages/Cookbook/cookbook";
import Addrecipe from "./pages/Addrecipe/addrecipe";
import Favorite from "./pages/Favorite/favorite";
import Basics from "./pages/Basics/basics";
import Ingredients from "./pages/Ingredients/ingredients";
import RecipeSteps from "./pages/RecipeSteps/recipesteps";
import RecipeSearchResults from "./pages/RecipeSearchResults/recipeSearchResults"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component= { Home }/>
          <Route path="/recipes" component= { Recipes }/>
          <Route path="/signup" component= { Signup }/>
          <Route path="/login" component= { Login }/>
          <Route path="/profile" component= { ProfilePage }/> 
          <Route path="/recipesearchresults" component= { RecipeSearchResults }/>


{/* Sidebar */}
          <Route path='/cookbook' component={ Cookbook } />
          <Route path='/addrecipe' component={ Addrecipe} />
          <Route path='/favorite' component={ Favorite } />

{/* add recipe choices */}
          <Route path='/basics' component={ Basics } />
          <Route path='/ingredients' component={ Ingredients } />
          <Route path='/recipesteps' component={ RecipeSteps } /> 
          
        </Switch>
      </div>
    </Router>
    )
}

export default App;
