import React from 'react';
import '../assets/styles/components/PropertyPreview.scss';
import propertyImg from '../assets/static/img/img-property.jpg';
import areaIcon from '../assets/static/icons/area-icon.svg';
import roomsIcon from '../assets/static/icons/rooms-icon.svg';
import bathIcon from '../assets/static/icons/bath-icon.svg';


const PropertyPreview = ({ title, price, code, type, details, complements, description, images }) => {
    // Create our number formatter.
    let formatterCurrency = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: '0',
    });
    return(

        <article className="featured-cards__property" style={{ backgroundImage: `url(${images[0]})` }}>
                <div className="property-footer">
                    <p className="property-footer__title">
                        {`${title}`}
                        <span>{`${code}`}</span>
                    </p>
                    <div className="property-footer__details-preview">
                        <div className="details-preview__area">
                            <span style={{ backgroundImage: `url(${areaIcon})` }}></span>
                            <p>{`${details.area}`} m<sup>2</sup></p> 
                        </div>
                        <div className="details-preview__rooms">
                            <span style={{ backgroundImage: `url(${roomsIcon})` }}></span>
                            <p>{`${details.rooms}`} habs. </p>                            
                        </div>
                        <div className="details-preview__baths">
                            <span style={{ backgroundImage: `url(${bathIcon})` }}></span>
                            <p>{`${details.bathrooms}`} b.</p> 
                    </div>
                    <div className="details-preview__price">
                        <p>{`${formatterCurrency.format(price)}`}</p>
                        <span>{`${type}`}</span>
                    </div>
                </div>
            </div>
        </article>

    );
}


export default PropertyPreview;