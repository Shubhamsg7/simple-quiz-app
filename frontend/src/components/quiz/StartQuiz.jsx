import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

const StartQuiz = () => {
    const navigate = useNavigate()
    const params = useParams();
    const state = useSelector(state => state)


    return (
        <div className='w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex justify-center items-center h-screen '>
                <div className='border-2 border-dashed p-1 rounded-3xl' >
                    <div className='bg-slate-100 dark:bg-gray-900 p-8 rounded-3xl shadow-lg'>
                        <h3 className='font-bold text-3xl text-gray-800 dark:text-white mb-4 text-center'>Are You Ready?</h3>

                        <div className='flex justify-center items-center gap-3'>
                            <button className='text-white bg-red-600 dark:bg-red-400 hover:bg-red-700 hover:dark:bg-red-500 px-4 py-2 uppercase font-bold rounded-xl' onClick={() => { navigate("/") }}>Leave</button>
                            <button className='text-white bg-green-600 dark:bg-green-400 hover:bg-green-700 hover:dark:bg-green-500 px-4 py-2 uppercase font-bold rounded-xl' onClick={() => { navigate(`/questions/${params.category}`) }}>Start Quiz</button>
                        </div>
                        {/* {state.quiz.length > 0 ? (<p className='text-sm text-gray-700 dark:text- mt-2'>In this category not question found</p>) : ''} */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartQuiz