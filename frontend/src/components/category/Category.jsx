import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({ item }) => {
    const navigate = useNavigate()

    return (
        <div className='border-2 border-dashed relative mt-16 p-1.5 rounded-3xl' onClick={() => { navigate(`/start-quiz/${item.category_name}`) }}>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 cursor-pointer transition-all duration-500 hover:shadow-lg hover:scale-95 h-[200px] ' >
                <div className='flex flex-col justify-between items-between h-full'>
                    <div>
                        <h1 className='text-2xl font-bold text-white uppercase'>{item.category_name}</h1>
                    </div>
                    <div className='flex flex-col justify-center leading-tight'>
                        <p className='text-gray-100 font-bold'>Level of 10 Questions</p>
                        <p className='text-gray-200'>Beginner, Intermediate, Professional
                        </p>
                    </div>
                    <img src={item.category_image} alt="no found" className='h-[180px] absolute top-[-80px] right-[-40px]' />
                </div>
            </div>
        </div >
    )
}

export default Category