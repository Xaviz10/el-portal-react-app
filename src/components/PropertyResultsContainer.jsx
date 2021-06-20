import React from 'react';
import '../assets/styles/components/PropertyResultsContainer.scss';
import PropertyPreview from './PropertyPreview'



const PropertyResultContainer = ({dataProperties}) => {
    

    return (
        <section className="property-list-container">
            <p className="property-list__comment">
                <span className="property-list__results-number">{`${dataProperties.length} `}</span>
                resultados que coinciden con tu busqueda
                <span className="property-list__keyword">"casa"</span>
            </p>

            <div className="property-list__results">
                {dataProperties.map(item =>
                    <PropertyPreview key={item.code} {...item}/>
                )}
            </div>
        
        </section>
    );
};


export default PropertyResultContainer;