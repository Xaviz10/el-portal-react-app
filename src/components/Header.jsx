import React from 'react';
import '../assets/styles/components/Header.scss';
import headerElPortalIcon from '../assets/static/icons/icon-header-elportal--white.svg'
import headerElPortalBlackIcon from '../assets/static/icons/icon-header-elportal--black.svg'
import hamButtonBlack from '../assets/static/icons/ham-button--black.svg'
import hamButtonWhite from '../assets/static/icons/ham-button--white.svg'


const Header = () => {
    return(    
        <header className="header-container">
            <a className="header__logo" href="#Home">
                <img src={headerElPortalBlackIcon} alt="El Portal Logo" />
            </a>

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
        </header>
    );

};


export default Header;