import React, {useRef} from 'react';
import '../assets/styles/components/FindOutContainer.scss';
import FindOutCard from './FindOutCard';
import leftArrowIcon from '../assets/static/icons/left-arrow-icon.svg';
import rightArrowIcon from '../assets/static/icons/right-arrow-icon.svg';


const FindOutContainer = () => {
    const refScroll = useRef();
    
    const scroll = (scrollOffset) => {
        refScroll.current.scrollLeft += scrollOffset;
    }

    return (
        <section className="main-find-out-container">
            <section className="find-out-cards-container">
                <div className="find-out-cards-inner-container" ref={refScroll}>
                    <div className="left-scroll" onClick={() => scroll(-300)}>
                        <span style={{backgroundImage: `url(${leftArrowIcon})`}}></span>
                    </div>
                    <div className="fake-card"></div>
                    <FindOutCard />
                    <FindOutCard />
                    <FindOutCard />
                    <FindOutCard />
                    <FindOutCard />
                    <div className="fake-card"></div>
                    <div className="right-scroll" onClick={() => scroll(300)}>
                        <span style={{ backgroundImage: `url(${rightArrowIcon})` }}></span>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default FindOutContainer;