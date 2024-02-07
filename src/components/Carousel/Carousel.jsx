import React from 'react';
import Slider from 'react-slick';
import Hero from '../Hero/Hero';
import classes from './Carousel.module.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <>
            <Slider {...settings} className={classes.slider}>

                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
                <div>
                    <Hero />
                </div>
            </Slider>
        </>
    );
};

export default Carousel;
