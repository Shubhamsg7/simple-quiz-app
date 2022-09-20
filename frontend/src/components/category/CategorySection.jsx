import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Categories from './Categories';
const CategorySection = () => {
    return (
        <div className='w-full p-4'>
            <div className='px-4 flex justify-start items-center gap-3'>
                <h3 className='font-bold text-2xl text-gray-800 dark:text-gray-200 uppercase'>Select Category</h3>
                <ArrowLongRightIcon className='w-6 h-6 hover:translate-x-4 transition-all duration-500 cursor-pointer text-gray-800 dark:text-gray-200' />
            </div>
            <Categories />
        </div>
    )
}

export default CategorySection