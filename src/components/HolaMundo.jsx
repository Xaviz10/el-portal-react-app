import React from 'react';
import '../assets/styles/App.scss'

const HolaMundo = () => {
    const Hello ='Hola Mundo'
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso React</h2>
        </div>
    );
};


export default HolaMundo;