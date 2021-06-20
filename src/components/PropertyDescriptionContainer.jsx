import React from 'react';
// import '../assets/styles/components/PropertyDescriptionContainer.scss';
import PropertyDescription from './PropertyDescription';

const PropertyDescriptionContainer = ({ propertyData }) => {
    return (
        <PropertyDescription {...propertyData}/>
    );
};

export default PropertyDescriptionContainer;