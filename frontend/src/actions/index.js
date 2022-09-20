import axios from 'axios';
import { SET_LOGIN, LOGOUT, GET_CATEGORIES, GET_QUIZ, LEAVE_QUIZ } from '../constants';

// Login
export const setLogin = (token) => {
    return function (dispatch, getState) {
        dispatch({
            type: SET_LOGIN,
            payload: token
        })
    }
}

// Logout
export const logout = () => {
    return function (dispatch, getState) {
        window.localStorage.setItem("token", null);
        dispatch({
            type: LOGOUT,
            payload: null
        })
    }
}


// Get Categories
export const getCategories = () => {
    return async function (dispatch, getState) {
        axios.get(`${process.env.REACT_APP_API_KEY}/api/category/read.php`)
            .then(res => {
                dispatch({
                    type: GET_CATEGORIES,
                    payload: res.data.data
                });
            });
    }
}

// Get quiz
export const getQuiz = (category) => {
    return async function (dispatch, getState) {
        axios.get(`${process.env.REACT_APP_API_KEY}/api/quiz/read.php?category=${category}`)
            .then(res => {
                dispatch({
                    type: GET_QUIZ,
                    payload: res.data.data
                });
            });
    }
}

// leave quiz
export const leaveQuiz = () => {
    return function (dispatch, getState) {
        dispatch({
            type: LEAVE_QUIZ,
            payload: null
        })
    }
}

