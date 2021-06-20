import  React from 'react';
import '../assets/styles/components/HeaderSearchBar.scss';
import headerSearchElPortalIcon from '../assets/static/icons/portal-logo-mini.svg';
import searchIcon from '../assets/static/icons/search-icon.svg';
import hamButtonBlack from '../assets/static/icons/ham-button--black.svg';
import hamButtonWhite from '../assets/static/icons/ham-button--white.svg';
import filterIcon from '../assets/static/icons/filter-icon.svg';
import sortIcon from '../assets/static/icons/sort-icon.svg';


const HeaderSearchBar = () => {
    return (
        <header>
            <div className="header-search-container">

                <div className="header-search-type">
                    <a className="header-search__logo" href="#Home">
                        <img src={headerSearchElPortalIcon} alt="El Portal Inmobiliaria" />
                    </a>
            
                    <form className="header-search__form" action="">
                        <label className="search-keyword" for="keyword">
                            <span style={{ backgroundImage: `url(${searchIcon})`}}></span>
                            <input type="search" placeholder="Busca por código, zona, barrio..." />
                        </label>
                    </form>    
                </div>
            
                
                <nav className="header__menu">
                    <a className="menu__button" id="hamBtn" >
                        <span className="button--open" style={{ backgroundImage: `url(${hamButtonBlack})` }}></span>
                        <span className="button--close"></span>
                    </a>
                    <ul className="menu__options">
                        <li>
                            <a href="#Ventas" className="menu-element">Ventas</a>
                        </li>
                        <li>
                            <a href="#Arriendos" className="menu-element">Arriendos</a>
                        </li>
                        <li>
                            <a href="#Emp" className="menu-element">Empeños</a>
                        </li>
                        <li>
                            <a href="#Contactos" className="menu-element">Contactos</a>
                        </li>
                    </ul>
            
                </nav>
            </div>

            <div className="header-admin-search-container">
                <a className="filter-button" href="#">
                    <span style={{ backgroundImage: `url(${filterIcon})` }}></span>
                    Filtrar
                </a>

                <a className="sort-button" href="#">
                    <span style={{ backgroundImage: `url(${sortIcon})` }}></span>
                    Ordenar por...
                </a>
            </div>
        </header>
    );
}

export default HeaderSearchBar;