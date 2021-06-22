import React, {useState, useEffect} from 'react';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState.js';

import Header from '../components/Header';
// import HeaderBlack from '../components/HeaderBlack';
import Footer from '../components/Footer';

import SearchContainer from '../components/SearchContainer';
import FeaturedContainer from '../components/FeaturedContainer';
import CallToActionContainer from '../components/CallToActionContainer';
import FindOutContainer from '../components/FindOutContainer';


import HeaderSearchBar from '../components/HeaderSearchBar';
import PropertyResultsContainer from '../components/PropertyResultsContainer';
import NewPropertyContainer from '../components/NewPropertyContainer';

import PropertyDescriptionContainer from '../components/PropertyDescriptionContainer';



const Home = () => {

    const initialState = useInitialState('http://192.168.101.5:3000/initialState');
    let { current, loading } = initialState;
    
    
    if (loading) {
        return (
            <h1>Loading...</h1>  
        );
    }

    return(
        <div className="App">
            {/* main page */}
            <Header />
            <div>
                <SearchContainer />
                <FeaturedContainer featureProperties={current.featureProperties}/>
                <CallToActionContainer />
                <FindOutContainer />
            </div>
            <Footer />

            {/* results page */}
            {/* <HeaderSearchBar />
            <div>
                <PropertyResultsContainer dataProperties={current.properties}/>
            </div>
            <Footer /> */}

            {/* <Header />
            <div>
                <NewPropertyContainer />
            </div>
            <Footer /> */}

            {/* <Header />
            <div>
                <PropertyDescriptionContainer propertyData={current.properties[0]}/>
            </div>
            <Footer /> */}
        </div>
    );
};

export default Home;