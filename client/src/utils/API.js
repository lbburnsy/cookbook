import axios from "axios";

export default {
  
  // Gets all recipes
  getRecipes: function () {
    return axios.get("https://infinite-citadel-91130.herokuapp.com"+"/app/getgeneralRecipes");
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
    return axios.post("https://infinite-citadel-91130.herokuapp.com"+"/app/addfavorite", favorite);
  },
  Login: function (payload) {
    return axios.post("https://infinite-citadel-91130.herokuapp.com"+"app/login", payload);
  },
  SignUp: function (registered) {
    return axios.post("https://infinite-citadel-91130.herokuapp.com"+"app/signup", registered);
  },
  AddRecipe: function (recipe) {
    return axios.post("https://infinite-citadel-91130.herokuapp.com"+"app/addrecipe", recipe);
  },
};
