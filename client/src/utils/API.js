import axios from "axios";

export default {
  // Gets all recipes
  getRecipes: function () {
    return axios.get("http://localhost:3001/app/getgeneralRecipes");
  },
  // // Gets the recipe with the given id
  // getRecipe: function(id) {
  //   return axios.get("/api/recipes/" + id);
  // },
  // // Deletes the recipe with the given id
  // deleteRecipe: function(id) {
  //   return axios.delete("/api/recipes/" + id);
  // },
  // // Saves a recipe to the database
  // saveRecipe: function(recipeData) {
  //   return("/api/recipes", recipeData);
  // },

  // // Gets user
  // getUser: function() {
  //   return axios.get("/api/user");
  // },

  addtoFavorite: function (favorite) {
    return axios.post("http://localhost:3001/app/addfavorite", favorite);
  },
  Login: function (payload) {
    return axios.post("http://localhost:3001/app/login", payload);
  },
  SignUp: function (registered) {
    return axios.post("http://localhost:3001/app/signup", registered);
  },
  AddRecipe: function (recipe) {
    axios.post("http://localhost:3001/app/addrecipe", recipe);
  },
};
