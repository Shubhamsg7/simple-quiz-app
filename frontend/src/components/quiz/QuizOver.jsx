import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { leaveQuiz } from '../../actions';

const QuizOver = ({ score, total }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const leaveQuizHandler = (e) => {
        dispatch(leaveQuiz())
        navigate("/")
    }
    return (
        <div className='w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex justify-center items-center h-screen '>
                <div className='border-2 border-dashed p-1 rounded-3xl' >
                    <div className='bg-slate-100 dark:bg-gray-900 p-8 rounded-3xl shadow-lg'>
                        <h3 className='font-bold text-3xl text-gray-800 dark:text-white mb-1 text-center'>Quiz Over</h3>
                        <h3 className='font-bold text-lg text-gray-800 dark:text-white mb-6 text-center'>Your Point is {score} of {total}</h3>
                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='font-bold text-xs text-gray-800 dark:text-white mb-1 text-center'>click on button go to main page</h3>
                            <button className='text-white bg-green-600 dark:bg-green-400 hover:bg-green-700 hover:dark:bg-green-500 px-4 py-2 uppercase font-bold rounded-xl text-sm' onClick={(e) => leaveQuizHandler(e)}>Click Here</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default QuizOver