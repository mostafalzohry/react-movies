import { combineReducers } from "redux";
import loaderReducer from "./loader";
import favoriteReducer from "./favorite";
import moviesReducer from "./allMovies";



export default combineReducers({
   loader: loaderReducer,
   favorite:favoriteReducer,
   getMovies:moviesReducer
})

