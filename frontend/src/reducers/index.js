import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import getCategories from "./getCategories";
import getQuiz from "./getQuiz";


const rootReducer = combineReducers({
    // Change Theme
    token: loginReducer, // Login and Logout
    categories: getCategories, // Categroies
    quiz: getQuiz, // Quiz

});

export default rootReducer;