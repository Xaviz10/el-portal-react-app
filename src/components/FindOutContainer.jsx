import React from 'react';
import '../assets/styles/components/FindOutContainer.scss';
import FindOutCard from './FindOutCard';


const FindOutContainer = () => {
    return (
        <section className="main-find-out-container">
            <section className="find-out-cards-container">
                <div className="fake-card"></div>
                <FindOutCard />
                <FindOutCard />
                <FindOutCard />
                <div className="fake-card"></div>
            </section>
        </section>
    );
};

export default FindOutContainer;