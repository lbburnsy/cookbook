import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import Recipes from "./pages/Recipes/recipes";
import Signup from "./components/Signup/signup";
import Login from "./pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 

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
          
        </Switch>
      </div>
    </Router>
    )
}

export default App;
