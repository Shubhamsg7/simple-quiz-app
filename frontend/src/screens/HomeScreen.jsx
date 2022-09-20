import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../actions'
import CategorySection from '../components/category/CategorySection'
import Header from '../components/common/Header'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    useEffect(() => {
        if (state.token) {
            dispatch(getCategories())
        }
    }, [dispatch, state.token])

    return (
        <>
            <Header />
            <CategorySection />
        </>
    )
}

export default HomeScreen