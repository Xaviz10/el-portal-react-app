import React from 'react';
import '../assets/styles/components/FeaturedContainer.scss';
import PropertyPreview from './PropertyPreview'


const FeaturedContainer = ({featureProperties}) => {
    return (
        <section className="main-featured-container">
            <h2 className="main-featured__title">
                Inmuebles Destacados
            </h2>
            <section className="featured-cards-container">
                <div className="fake-card" ></div>
                {featureProperties.map(item =>
                    <PropertyPreview key={item.code} {...item}/>
                )}
                <div className="fake-card" ></div>
            </section>
        </section>
    );
};

export default FeaturedContainer;