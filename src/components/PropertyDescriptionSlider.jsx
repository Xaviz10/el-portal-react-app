import React, {useState, useEffect} from 'react';
import {fakeSliderData} from './fakeSliderData'
import '../assets/styles/components/PropertyDescriptionSlider.scss';

import leftArrowIcon from '../assets/static/icons/left-arrow-icon.svg';
import rightArrowIcon from '../assets/static/icons/right-arrow-icon.svg';



const carouselImagesProperty = ({ imagesArray }) => {
    //current state and the functions that updates
    const [current, setCurrent] = useState(0);
    const length = imagesArray ? imagesArray.length : 0;
    console.log(length);

    //Functions for the slides management
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    //If no imagesArray are detected
    if (!Array.isArray(imagesArray) || length <= 0) {
        return (
            <div className="property-description-slider">
                <div className="left-arrow" >
                    <span style={{ backgroundImage: `url(${leftArrowIcon})` }}></span>
                </div>
                <div className="property-description-inner-slide">
                
                </div>
                <div className="right-arrow" >
                    <span style={{ backgroundImage: `url(${rightArrowIcon})` }}></span>
                </div>
            </div>
        );
    }

    return (
        <div className="property-description-slider">
            <div className="left-arrow" onClick={prevSlide}>
                <span style={{ backgroundImage: `url(${leftArrowIcon})` }}></span>
            </div>
            <div className="property-description-inner-slide">
                {imagesArray.map((slide, index) => {
                    return (
                            //create a div for the active and inactive slide
                            <div className={index === current ? "slide--active" : "slide--innactive"}
                            key={index}>
                                {index === current && (<img className="photos-slider__image" src={slide} />)}
                            </div>
                        );
                })}
                
            </div>
            <div className="right-arrow" onClick={nextSlide}>
                <span style={{ backgroundImage: `url(${rightArrowIcon})` }}></span>
            </div>
        </div>
    );
};


export default carouselImagesProperty;