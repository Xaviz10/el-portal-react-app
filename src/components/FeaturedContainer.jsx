import React, {useRef} from 'react';
import '../assets/styles/components/FeaturedContainer.scss';
import PropertyPreview from './PropertyPreview'
import leftArrowIcon from '../assets/static/icons/left-arrow-icon.svg';
import rightArrowIcon from '../assets/static/icons/right-arrow-icon.svg';

const FeaturedContainer = ({ featureProperties }) => {
    const refScroll = useRef();
    
    const scroll = (scrollOffset) => {
        refScroll.current.scrollLeft += scrollOffset;
    }

    return (
        <section className="main-featured-container">
            <h2 className="main-featured__title">
                Inmuebles Destacados
            </h2>
            <section className="featured-cards-container">
                
                
                <div className="featured-cards-inner-container" ref={refScroll}>
                    <div className="left-scroll" onClick={() => scroll(-300)}>
                        <span style={{backgroundImage: `url(${leftArrowIcon})`}}></span>
                    </div>
                    <div className="fake-card" ></div>
                    {featureProperties.map(item =>
                        <PropertyPreview key={item.code} {...item}/>
                    )}
                    <div className="fake-card" ></div>
                    <div className="right-scroll" onClick={() => scroll(300)}>
                        <span style={{ backgroundImage: `url(${rightArrowIcon})` }}></span>
                    </div>
                </div>
                
            </section>
        </section>
    );
};

export default FeaturedContainer;