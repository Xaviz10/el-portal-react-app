import React from 'react';
import '../assets/styles/components/Footer.scss';
import iconFooterElPortal from '../assets/static/icons/icon-header-elportal--white.svg';
import facebookIcon from '../assets/static/icons/facebook-icon.svg';
import instagramIcon from '../assets/static/icons/instagram-icon.svg';
import whatsappIcon from '../assets/static/icons/whatsapp-icon.svg';
import emailIcon from '../assets/static/icons/email-icon.svg';
import phoneIcon from '../assets/static/icons/phone-icon.svg';


const Footer = () => {
    return (
        <footer>
            <img src={iconFooterElPortal} alt="Logo de El Portal Agencia Inmobiliaria" />
            
            <section className="footer-social">
                <p className="footer-social__title">Síguenos:</p>
                <ul>
                    <li>
                        <a href="#">
                            <span className="el-portal-facebook"
                            style={{backgroundImage: `url(${facebookIcon})`}}></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="el-portal-instagram"
                            style={{backgroundImage: `url(${instagramIcon})`}}></span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="el-portal-whatsapp"
                            style={{backgroundImage: `url(${whatsappIcon})`}}></span>
                        </a>
                    </li>
                    
                </ul>
            </section>

            <section className="footer-contacts">
                <p className="footer-contacts__title">Contáctanos:</p>
                <ul>
                    <li>
                        <a href="#">
                            <span className="el-portal-email"
                            style={{backgroundImage: `url(${emailIcon})`}}></span>
                            elportalagenciainm@hotmail.com
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="el-portal-phone"
                            style={{backgroundImage: `url(${phoneIcon})`}}></span>
                            (+57) 300 562 1199
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="el-portal-phone"
                            style={{backgroundImage: `url(${phoneIcon})`}}></span>
                            (+57) 321 308 2759
                        </a>
                    </li>
                </ul>
            </section>
        </footer>   
    );
};

export default Footer;