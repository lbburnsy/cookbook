import React, { useState, useEffect } from "react";
import API from "./utils/API";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import Recipes from "./pages/Recipes/recipes";
import Signup from "./components/Signup/signup";
import Login from "./pages/Login/login";
import RecipeSearchResults from "./pages/RecipeSearchResults/recipeSearchResults";
import ProfilePage from "./pages/ProfilePage/profilePage";
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import Cookbook from "./pages/Cookbook/cookbook";
import Addrecipe from "./pages/Addrecipe/addrecipe";
import Favorite from "./pages/Favorite/favorite";
import Basics from "./pages/Basics/basics";
import Ingredients from "./pages/Ingredients/ingredients";
import RecipeSteps from "./pages/RecipeSteps/recipesteps";
import RecipeDetailsPage from "./pages/RecipeDetailsPage/recipeDetailsPage";
import CategoriesPage from "./pages/Categories/categories";

const filterItems = (name, value, data) => {
  switch (name) {
    case "ingredients":
      return data.filter(
        (item) =>
          value === "" ||
          item[name].some((item1) =>
            item1.toLowerCase().includes(value.toLowerCase())
          )
      );
    default:
      return data.filter(
        (item) =>
          value === "" ||
          item[name]?.toLowerCase()?.includes(value.toLowerCase())
      );
  }
};

const applyFilter = (filter, text) => {
  let items = filterItems("ingredients", filter.ingredients, text);
  items = filterItems("cuisine", filter.cuisine, items);
  items = filterItems("category", filter.category, items);
  return items;
}
const initFilter = {ingredients: "", cuisine: "", category: ""};

function App() {
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filter, setFilter] = useState(initFilter);
  const [recipe, setRecipe] = useState();
  // recipe is what saves the original data
  //searchedRecipes is the data filtered by what the user types in the search bar
  // filteredRecipes is the searchedRecipes filtered by what the user types in the ingridents cuisine and mealtype

  useEffect(() => {
    loadRecipes();
  }, []);
  // this is only called once because it has no dependances
  function loadRecipes() {
    API.getRecipes()
      .then((res) => {
        setRecipes(res.data);
        setSearchedRecipes(res.data);
        setFilteredRecipes(res.data);
        console.log(res.data)
        // two tiers of filltering data first tier is search box second tier is the filter of the searched recipes
      })
      .catch((err) => console.log(err));
  }
  // setting all of them to the entier data so that we do not get an error

  function onSearch(text) {
    setFilteredRecipes(applyFilter(filter, searchedRecipes));
    console.log(text);

    // setTimeout(() => window.location = "/recipesearchresults", 500)
    // window.location = "/recipesearchresults";
    // tryed earlier to change the window location to this ^ but still did not work
    // this is where I am stuck I can not figure out how to get the search results to render in recipesearchresults page
    // history.push(`/recipesearchresults/?search=${text}`)
  }

  function onText(text, hits) {
    if (text === "") return;
    if (hits) {
      setSearchedRecipes(hits);
    }
    // setFilteredRecipes(applyFilter(filter, hits))
    console.log(hits);
    // setFilteredRecipes(applyFilter(filter, searchedRecipes));
    // searchedRecipes is only set when the user types in the searchbox so it is the result of filtering the entier data set by what is in search box
  }

  const onFilterChange = (e) => {
    console.log(e.target.name, e.target.value)
    const {name, value} =  e.target;
    let newFilter = "";
    switch (name) {
      case "clearButton":
        newFilter = initFilter;
        break;
      default: 
       newFilter = {...filter, [name]: value};
    }
    
    setFilter(newFilter);
    setFilteredRecipes(applyFilter(newFilter, searchedRecipes));
  };

  const onRecipeClick = (recipe) => {
    setRecipe(recipe)
    history.push("/recipedetailspage")

  }

  return (
    
      <div className="app">
        <Navbar onSearch={onSearch} onText={onText} recipes={recipes} />
        <Switch>
          <Route path="/" exact component= { Home }/>
          <Route path="/recipes" component= { Recipes }/>
          <Route path="/categories" component= { CategoriesPage }/>
          <Route path="/signup" component= { Signup }/>
          <Route path="/login" component= { Login }/>
          <Route path="/profile" component= { ProfilePage }/> 
          <Route path="/recipesearchresults" render= { () => < RecipeSearchResults onRecipeClick={onRecipeClick} onFilterChange={onFilterChange} recipes={filteredRecipes} filter={filter} />}/>
          <Route path="/recipedetailspage" render= { () => <RecipeDetailsPage recipe={recipe} />}/>


{/* Sidebar */}
          <Route path='/cookbook' component={ Cookbook } />
          <Route path='/addrecipe' component={ Addrecipe} />
          <Route path='/favorite' component={ Favorite } />

          {/* Sidebar */}
          <Route path="/cookbook" component={Cookbook} />
          <Route path="/addrecipe" component={Addrecipe} />
          <Route path="/favorite" component={Favorite} />

          {/* add recipe choices */}
          <Route path="/basics" component={Basics} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/recipesteps" component={RecipeSteps} />
        </Switch>
      </div>
 
  );
}

export default App;
