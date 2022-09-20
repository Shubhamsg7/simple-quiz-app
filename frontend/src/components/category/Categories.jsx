import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux';
import Category from './Category';
import ComingSoon from './ComingSoon';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Categories = () => {

    const state = useSelector(state => state)

    return (
        <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="p-4"
        >
            {state.categories.map((item, index) => (
                <Category key={index} item={item} />
            ))}
            <ComingSoon />
        </Carousel>
    )
}

export default Categories