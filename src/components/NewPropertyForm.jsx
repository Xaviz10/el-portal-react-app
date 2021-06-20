import React from 'react';
import '../assets/styles/components/NewPropertyForm.scss';

import itemImg1 from '../assets/static/img/img-property.jpg'
import itemImg2 from '../assets/static/img/call-to-action-img.jpg'
import itemImg3 from '../assets/static/img/img-property.jpg'

import addPhotoIcon from '../assets/static/icons/add-photo-icon.svg';
import areaIcon from '../assets/static/icons/area-icon.svg';
import roomsIcon from '../assets/static/icons/rooms-icon.svg';
import bathIcon from '../assets/static/icons/bath-icon.svg';
import parkingIcon from '../assets/static/icons/parking-icon.svg';
import adminIcon from '../assets/static/icons/admin-icon.svg';
import propertyYearIcon from '../assets/static/icons/property-year-icon.svg';
import statusIcon from '../assets/static/icons/status-icon.svg';
import flatIcon from '../assets/static/icons/flat-icon.svg';
import locationIcon from '../assets/static/icons/location-icon.svg';


const NewPropertyForm = () => {
    return (
        <form className="form__new-property" action="">
            <div className="form__photos-slider-container">
                <div className="form__photos-slider">
                    <div></div>

                    {/* <!-- <input type="file" className="new-property__add-photos">
                            <span></span>
                        </input> --> */}

                    <img className="photos-slider__image" src={itemImg1}></img>
                    <img className="photos-slider__image" src={itemImg2}></img>
                    <img className="photos-slider__image" src={itemImg3}></img>

                    <button className="photos-slider__button-add-photos">
                        <span style={{ backgroundImage: `url(${addPhotoIcon})` }}></span>
                    </button>

                    {/* <!-- div only for make visible the entery button in the slider --> */}
                    <div></div>
                </div>
            </div>

            <div className="form__property-details">

                <label className="new-property__detail-item new-property__title" for="title">
                    <input type="text" id="title" name="title" placeholder="Título" />
                </label>

                <label className="new-property__detail-item new-property__price" for="price">
                    <input type="text" id="price" name="price" placeholder="Precio" />
                </label>

                <label className="new-property__detail-item new-property__code" for="code">
                    <input type="text" id="code" name="code" placeholder="Código" />
                </label>

                <label className="new-property__detail-item new-property__type" for="type">
                    <select name="type" id="type" area="type">
                        <option value="" disable selected>Tipo</option>
                        <option value="venta">Venta</option>
                        <option value="arriendo">Arriendo</option>
                        <option value="empeño">Empeño</option>
                    </select>
                </label>

                <p className="property-details__title">Detalles</p>

                <label className="new-property__detail-item new-property__area" for="area">
                    <span style={{ backgroundImage: `url(${areaIcon})` }}></span>
                    <input type="number" id="area" name="area" placeholder="Área" />
                </label>

                <label className="new-property__detail-item new-property__rooms" for="rooms">
                    <span style={{ backgroundImage: `url(${roomsIcon})` }}></span>
                    <input type="number" id="rooms" name="rooms" placeholder="Habitaciones" />
                    <button className="btn__up btn-rooms__up">+</button>
                    <button className="btn__down btn-rooms__down">-</button>
                </label>

                <label className="new-property__detail-item new-property__bathrooms" for="bathrooms">
                    <span style={{ backgroundImage: `url(${bathIcon})` }}></span>
                    <input type="number" id="bathrooms" name="bathrooms" placeholder="Baños" />
                    <button className="btn__up btn-bathrooms__up">+</button>
                    <button className="btn__down btn-bathrooms__down">-</button>
                </label>

                <label className="new-property__detail-item new-property__parking" for="parking">
                    <span style={{ backgroundImage: `url(${parkingIcon})` }}></span>
                    <input type="number" id="parking" name="parking" placeholder="Parqueaderos" />
                    <button className="btn__up btn-parking__up">+</button>
                    <button className="btn__down btn-parking__up">-</button>

                </label>
                {/* <!-- </div>

                <div className="form__property-complements"> --> */}

                <label className="new-property__complement-item new-property__admin-value" for="admin-value">
                    <span style={{ backgroundImage: `url(${adminIcon})` }}></span>
                    <input type="number" id="admin-value" name="admin-value" placeholder="Administración" />
                </label>

                <label className="new-property__complement-item new-property__year" for="year">
                    <span style={{ backgroundImage: `url(${propertyYearIcon})` }}></span>
                    <input type="number" id="year" name="year" min="1900" max="2099" step="1" placeholder="Año de construcción" />
                </label>

                <label className="new-property__complement-item new-property__status-level" for="status-level">
                    <span style={{ backgroundImage: `url(${statusIcon})` }}></span>
                    <input type="number" id="status-level" name="status-level" placeholder="Estrato" />
                    <button className="btn__up btn-flat__up">+</button>
                    <button className="btn__down btn-flat__up">-</button>
                </label>

                <label className="new-property__complement-item new-property__flat" for="flat">
                    <span style={{ backgroundImage: `url(${flatIcon})` }}></span>
                    <input type="number" id="flat" name="flat" placeholder="Piso" />
                    <button className="btn__up btn-flat__up">+</button>
                    <button className="btn__down btn-flat__up">-</button>
                </label>

                <div className="new-property__subsidy" >
                    <input type="checkbox" id="subsidy" name="subsidy" />
                    <label for="subsidy">
                        Subsidio gobierno
                        </label>
                </div>

            </div>

            <div className="form__property-aditional-characteristics">
                <p className="property-aditional-characteristics__title">Características</p>

                <div className="new-property__aditional-characteristics new-property__private-terrace" >
                    <input type="checkbox" id="private-terrace" name="private-terrace" />
                    <label for="private-terrace">
                        Terraza privada
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__living-room-tv" >
                    <input type="checkbox" id="living-room-tv" name="living-room-tv" />
                    <label for="living-room-tv">
                        Estar TV
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__study" >
                    <input type="checkbox" id="study" name="study" />
                    <label for="study">
                        Estudio
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__green-areas" >
                    <input type="checkbox" id="green-areas" name="green-areas" />
                    <label for="green-areas">
                        Zonad verdes
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__gym" >
                    <input type="checkbox" id="gym" name="gym" />
                    <label for="grym">
                        Gimnasio
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__jacuzzi" >
                    <input type="checkbox" id="jacuzzi" name="jacuzzi" />
                    <label for="jacuzzi">
                        Jacuzzi
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__childish-area" >
                    <input type="checkbox" id="childish-area" name="childish-area" />
                    <label for="childish-area">
                        Zona infantil
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__service-room" >
                    <input type="checkbox" id="service-room" name="service-room" />
                    <label for="service-room">
                        Cuarto servicio
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__clothes-zone" >
                    <input type="checkbox" id="clothes-zone" name="clothes-zone" />
                    <label for="clothes-zone">
                        Zona de ropas
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__integral-kitchen" >
                    <input type="checkbox" id="integral-kitchen" name="integral-kitchen" />
                    <label for="integral-kitchen">
                        Cocina integral
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__elevator" >
                    <input type="checkbox" id="elevator" name="integral-kitchen" />
                    <label for="elevator">
                        Ascensor
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__deposit" >
                    <input type="checkbox" id="deposit" name="deposit" />
                    <label for="deposit">
                        Depósito
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__communal-living" >
                    <input type="checkbox" id="communal-living" name="communal-living" />
                    <label for="communal-living">
                        Salón comunal
                        </label>
                </div>

                <div className="new-property__aditional-characteristics new-property__private-security" >
                    <input type="checkbox" id="private-security" name="private-security" />
                    <label for="private-security">
                        Seguridad priv.
                        </label>
                </div>

            </div>

            <div className="form__property-description">

                <p className="property-description__title">Descripción</p>

                <label className="new-property__title-description" for="">
                    <textarea name="title-description" rows="3" form=""
                        placeholder="Agrega una descripciónn corta del inmueble"></textarea>
                </label>

                <label className="new-property__detailed-description" for="">
                    <textarea name="detailed-description" rows="10" form=""
                        placeholder="Agrega una descripción más detallada  del inmueble (establecimientos cercanos, parques, etc.)"></textarea>
                </label>

                <label className="new-property__location" for="location">
                    <span style={{ backgroundImage: `url(${locationIcon})` }}></span>
                    <input type="number" id="location" name="location" placeholder="Ubicación" />
                </label>

                <div className="new-property__map">
                    <span></span>
                </div>
            </div>
            <div className="form__buttons-confirmation">
                <button className="form-button__save-property">
                    Confirmar
                </button>
                <button className="form-button__cancel-property">
                    Cancelar
                </button>
            </div>
        </form>
    );
};


export default NewPropertyForm;