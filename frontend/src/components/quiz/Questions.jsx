import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getQuiz, leaveQuiz } from '../../actions'
import QuizOver from './QuizOver'

const Questions = () => {
    const navigate = useNavigate()
    const params = useParams();
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerButtonClick = (answer) => {
        if (answer === state.quiz[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < state.quiz.length) {
            setCurrentQuestion(nextQuetions);
        } else {
            setShowScore(true);
            //navigate('/quiz-over')
        }
    };


    useEffect(() => {
        if (state.token) {
            dispatch(getQuiz(params.category))
        }
    }, [dispatch, params.category, state.token])

    const leaveQuizHandler = (e) => {
        dispatch(leaveQuiz())
        navigate("/")
    }

    return (
        <>
            {
                state.quiz !== null ? (
                    showScore ? (
                        <QuizOver score={score} total={state.quiz.length} />
                    ) : (
                        <div className='w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <div className='flex justify-center items-center h-screen p-4'>
                                <div className='w-full md:w-2/3 h-[90%] border-2 border-dashed p-1 rounded-3xl' >
                                    <div className='bg-slate-100 dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden relative h-full'>
                                        <div className="bg bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50">
                                        </div>
                                        <div className='p-8 absolute top-5 w-full'>

                                            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-xl uppercase'>
                                                <h4 className='text-white font-bold px-2'>{state.quiz.length ? state.quiz[currentQuestion].category : ''}</h4>
                                            </div>
                                            <div className='bg-slate-200 dark:bg-gray-800 rounded-2xl  shadow-md px-4 py-6 mb-10 text-gray-800 dark:text-white'>
                                                <h4 className='text-center text-2xl font-bold'>{state.quiz.length ? state.quiz[currentQuestion].question : ''}</h4>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                                                <div className='border-2 border-dashed border-gray-300 p-1.5 rounded-2xl text-gray-800 dark:text-white '>
                                                    <div className='bg-slate-200 dark:bg-gray-800 rounded-2xl p-4 text-xl text-center font-bold cursor-pointer hover:bg-green-200 dark:hover:bg-green-500' onClick={() =>
                                                        handleAnswerButtonClick(state.quiz[currentQuestion].option1)
                                                    }>{state.quiz.length ? state.quiz[currentQuestion].option1 : ''}</div>
                                                </div>
                                                <div className='border-2 border-dashed border-gray-300 p-1.5 rounded-2xl text-gray-800 dark:text-white'>
                                                    <div className='bg-slate-200 dark:bg-gray-800 rounded-2xl p-4 text-xl text-center font-bold cursor-pointer  hover:bg-green-200 dark:hover:bg-green-500' onClick={() =>
                                                        handleAnswerButtonClick(state.quiz[currentQuestion].option2)
                                                    }>{state.quiz.length ? state.quiz[currentQuestion].option2 : ''}</div>
                                                </div>
                                                <div className='border-2 border-dashed border-gray-300 p-1.5 rounded-2xl text-gray-800 dark:text-white'>
                                                    <div className='bg-slate-200 dark:bg-gray-800 rounded-2xl p-4 text-xl text-center font-bold cursor-pointer  hover:bg-green-200 dark:hover:bg-green-500' onClick={() =>
                                                        handleAnswerButtonClick(state.quiz[currentQuestion].option3)
                                                    }>{state.quiz.length ? state.quiz[currentQuestion].option3 : ''}</div>
                                                </div>
                                                <div className='border-2 border-dashed border-gray-300 p-1.5 rounded-2xl text-gray-800 dark:text-white'>
                                                    <div className='bg-slate-200 dark:bg-gray-800 rounded-2xl p-4 text-xl text-center font-bold cursor-pointer  hover:bg-green-200 dark:hover:bg-green-500' onClick={() =>
                                                        handleAnswerButtonClick(state.quiz[currentQuestion].option4)
                                                    }>{state.quiz.length ? state.quiz[currentQuestion].option4 : ''}</div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between items-center gap-3'>
                                                <div className='uppercase '>
                                                    <h4 className='text-gray-800 dark:text-white font-bold px-2'>Question {currentQuestion + 1} of {state.quiz.length}</h4>
                                                </div>
                                                <button className='text-white bg-red-600 dark:bg-red-400 hover:bg-red-700 hover:dark:bg-red-500 px-4 py-2 uppercase font-bold rounded-xl' onClick={(e) => leaveQuizHandler(e)}>Leave Quiz</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                ) : (
                    <div className='w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        <div className='flex justify-center items-center h-screen p-4'>
                            <div className='w-full md:w-2/3 h-[50%] border-2 border-dashed p-1 rounded-3xl' >
                                <div className='bg-slate-100 dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden relative h-full'>
                                    <div className="bg bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50">
                                    </div>
                                    <div className='p-8 absolute top-5 w-full'>
                                        <div className='bg-slate-200 dark:bg-gray-800 rounded-2xl  shadow-md px-4 py-6 mb-10 text-gray-800 dark:text-white'>
                                            <h4 className='text-center text-2xl font-bold'>No Question Found</h4>
                                        </div>
                                        <div className='flex justify-end items-center gap-3'>
                                            <button className='text-white bg-red-600 dark:bg-red-400 hover:bg-red-700 hover:dark:bg-red-500 px-4 py-2 uppercase font-bold rounded-xl' onClick={(e) => leaveQuizHandler(e)}>Leave Quiz</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )}
        </>

    )
}

export default Questions