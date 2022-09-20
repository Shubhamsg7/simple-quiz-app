import React from 'react'
import image from '../../assets/images/rocket-dynamic-color.png'

const ComingSoon = () => {
    return (
        <div className='border-2 border-dashed relative mt-16 p-1.5 rounded-3xl'>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 transition-all duration-500 hover:shadow-lg hover:scale-95 h-[200px] ' >
                <div className='flex flex-col justify-between items-between h-full'>
                    <div>
                        <h1 className='text-2xl font-bold text-white uppercase'>Coming<br /> Soon..</h1>
                    </div>
                    <div className='flex flex-col justify-center leading-tight'>
                        <p className='text-gray-100 font-bold'>More category adding soon</p>
                    </div>
                    <img src={image} alt="no found" className='h-[180px] absolute top-[-80px] right-[-40px]' />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon