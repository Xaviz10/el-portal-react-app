import React from 'react';
import '../assets/styles/components/NewPropertyContainer.scss';
import NewPropertyForm from './NewPropertyForm';


const NewProperty = () => {
    return (
        <section className="main-new-property-container">
            <p className="new-property__title">
                Hola
                <span className="title__admin-name">Nhora</span>,
                completa el siguiente formulario para adicionar
                una nueva propiedad.
            </p>
            <NewPropertyForm/>
        </section>
    );
};

export default NewProperty;