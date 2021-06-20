import React from 'react';
import '../assets/styles/components/PropertyDescription.scss';
import PropertyDescriptionSlider from './PropertyDescriptionSlider';

import addPhotoIcon from '../assets/static/icons/add-photo-icon.svg';
import areaIcon from '../assets/static/icons/area-icon.svg';
import roomsIcon from '../assets/static/icons/rooms-icon.svg';
import bathIcon from '../assets/static/icons/bath-icon.svg';
import parkingIcon from '../assets/static/icons/parking-icon.svg';
import areaPriceIcon from '../assets/static/icons/area-price-icon.svg';
import adminIcon from '../assets/static/icons/admin-icon.svg';
import propertyYearIcon from '../assets/static/icons/property-year-icon.svg';
import statusIcon from '../assets/static/icons/status-icon.svg';
import flatIcon from '../assets/static/icons/flat-icon.svg';
import subsidyIcon from '../assets/static/icons/subsidy-icon.svg';
import locationIcon from '../assets/static/icons/location-icon.svg';

const PropertyDescription = ({ title, price, code, type, details, complements, description, images }) => {


    // Create our number formatter.
    let formatterCurrency = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: '0',
    });

    return (
        <section className="main-property-description-container">
            <PropertyDescriptionSlider imagesArray={images}/>

            {/* <div className="property-description-admin">
                <button className="property-description-admin__button-edit">
                    <span></span>
                    Editar
                </button>
                <button className="property-description-admin__button-delete">
                    <span></span>
                    Eliminar
                </button>
            </div> */}

            <div className="property-description-footer">
                <h3 className="property-description-footer__title">
                    {`${title}`}
                </h3>
                <div className="property-description-footer__details">
                    <div className="details__price">
                        <h4>{`${formatterCurrency.format(price)}`}</h4>
                        <span>{`${type}`}</span>
                    </div>
                    <div className="details__code">
                        <h4>{`${code}`}</h4>
                        <span>Código</span>
                    </div>
                    <div className="details__area">
                        <span style={{ backgroundImage: `url(${areaIcon})` }}></span>
                        <p>{`${details.area}`} m<sup>2</sup></p>
                    </div>
                    <div className="details__rooms">
                        <span style={{ backgroundImage: `url(${roomsIcon})` }}></span>
                        <p>{`${details.rooms}`} habs. </p>
                    </div>
                    <div className="details__baths">
                        <span style={{ backgroundImage: `url(${bathIcon})` }}></span>
                        <p>{`${details.bathrooms}`} b.</p>
                    </div>

                    <div className="details__parking">
                        <span style={{ backgroundImage: `url(${parkingIcon})` }}></span>
                        <p>{`${details.parking}`} p.</p>
                    </div>

                </div>

                <div className="property-description-footer__complement">
                    <div className="property-description-complement complement__area-price">
                        <span style={{ backgroundImage: `url(${areaPriceIcon})` }}></span>
                        <h4>{`${formatterCurrency.format(Math.round(price/details.area, -1))}`}</h4>
                        <p>Valor / m<sup>2</sup></p>
                    </div>
                    <div className="property-description-complement complement__administration">
                        <span style={{ backgroundImage: `url(${adminIcon})` }}></span>
                        <h4>{`${formatterCurrency.format(details.adminValue)}`}</h4>
                        <p>Administración</p>
                    </div>
                    <div className="property-description-complement complement__year">
                        <span style={{ backgroundImage: `url(${propertyYearIcon})` }}></span>
                        <h4>{`${details.year}`}</h4>
                        <p>Año de construcción</p>
                    </div>

                    <div className="property-description-complement complement__status-level">
                        <span style={{ backgroundImage: `url(${statusIcon})` }}></span>
                        <h4>{`${details.statusLevel}`}</h4>
                        <p>Estrato</p>
                    </div>

                    <div className="property-description-complement complement__flat">
                        <span style={{ backgroundImage: `url(${flatIcon})` }}></span>
                        <h4>{`${details.flat}`}</h4>
                        <p>Piso</p>
                    </div>

                    <div className="property-description-complement complement__subsidy">
                        <span style={{ backgroundImage: `url(${subsidyIcon})` }}></span>
                        <h4>{(details.subsidy? 'Apto' : 'No Apto')}</h4>
                        <p>Subsidio gobierno</p>
                    </div>
                </div>
            </div>
            <div className="property-description-characteristics">
                <p className="property-description-characteristics__title">Características</p>
                <ul className="property-description-characteristics__list">

                    {complements.privateTerrace ? <li>Terraza privada</li> : null}
                    {complements.livingRoomTv? <li>Estar TV</li> : null}
                    {complements.study? <li>Estudio</li> : null}
                    {complements.greenAreas? <li>Zonas verdes</li> : null}
                    {complements.gym? <li>Gimnasio</li> : null}
                    {complements.jacuzzi? <li>Jacuzzi</li> : null}
                    {complements.childishArea? <li>Zona infantil</li> : null}
                    {complements.clothesZone? <li>Zona de ropas</li> : null}
                    {complements.integralKitchen? <li>Cocina integral</li> : null}
                    {complements.deposit? <li>Terraza privada</li> : null}
                    {complements.elevator? <li>Ascensor</li> : null}
                    {complements.serviceRoom? <li>Cuarto servicio</li> : null}
                    {complements.communalLiving? <li>Salón comunal</li> : null}
                    {complements.privateSecurity? <li>Seguridad priv.</li> : null}
                </ul>

                <article className="property-description-characteristcs__description">
                    <p className="description__title"> {`${description.titleDescription}`}</p>
                    <p className="description__detailed">{`${description.detailedDescription}`}</p>
                </article>
            </div>

            <div className="property-description-map-contact-container">

                {/* <iframe className="property__map" src="" frameborder="0"> </iframe> */}
                <div className="property__map"> </div>

                <p className="property-description-map-contact__title">Estoy interesado, quiero ser contactado</p>

                <form className="property__form-contact" action="">
                    <label for="name">
                        <input type="text" id="name" autocomplete="name" placeholder="Nombre"/>
                    </label>

                    <label for="tel">
                        <input type="tel" id="tel" autocomplete="tel"   placeholder="Teléfono"/>
                    </label>

                    <label for="email">
                        <input type="email" id="email" autocomplete="email"  placeholder="Correo Electrónico"/>
                    </label>

                    <input className="form-contact__button" type="submit" value="Enviar"/>
                </form>
            </div>
        </section>
    );
};

export default PropertyDescription;