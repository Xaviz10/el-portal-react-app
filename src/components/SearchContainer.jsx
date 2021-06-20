import React from 'react';
import '../assets/styles/components/SearchContainer.scss';
import searchContainerImg from '../assets/static/img/search-portal-img.jpg';
import searchIcon from '../assets/static/icons/search-icon.svg';


const SearchContainer = () => {
    return (
        <section className="main-search-container" style={{ backgroundImage: `url(${searchContainerImg})` }}>
            <h2 className="main-search__title"> 
                ¿Que inmueble deseas?
            </h2>

            <form className="search__form" action="">
                <label className="search-keyword" for="keyword">
                    <span style={{ backgroundImage: `url(${searchIcon})` }}></span>
                    <input type="search" placeholder="Busca por código, zona, barrio..." />
                </label>
                <label className="search-rooms" for="rooms">
                    <select name="" id="">
                        <option value="" disable selected>Habitaciones</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">+4</option>
                    </select>
                </label>
                <label className="search-type" for="type">
                    <select name="" id="">
                        <option value="" disable selected>Tipo</option>
                        <option value="venta">Venta</option>
                        <option value="arriendo">Arriendo</option>
                        <option value="empeño">Empeño</option>
                    </select>
                </label>
                <button className="search-button">
                    Buscar
                </button>
            </form>

        </section>
    );
};

export default SearchContainer;