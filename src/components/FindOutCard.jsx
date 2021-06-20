import React from 'react';
import '../assets/styles/components/FindOutCard.scss';
import cardImg from '../assets/static/img/recommendation-houses-img.jpg';

const FindOutCard = () => {
    return (
        <article className="find-out-cards__recommendation find-out-houses" style={{ backgroundImage: `url(${cardImg})`}}>
            <h3 className="recommendation__description">
                Encuentra la casa de tus sueños
            </h3>
            <a href="#" className="recommendation__call-to-action">
                Descúbrela
            </a>
        </article>      
    );
};


export default FindOutCard;