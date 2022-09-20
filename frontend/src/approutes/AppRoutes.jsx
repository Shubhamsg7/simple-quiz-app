import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorScreen from '../screens/ErrorScreen'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import QuestionScreen from '../screens/QuestionScreen'
import QuizOverScreen from '../screens/QuizOverScreen'
import StartQuizScreen from '../screens/StartQuizScreen'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/start-quiz/:category' element={<StartQuizScreen />} />
                <Route path='/questions/:category' element={<QuestionScreen />} />
                <Route path='/quiz-over' element={<QuizOverScreen />} />
                <Route path='*' element={<ErrorScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes