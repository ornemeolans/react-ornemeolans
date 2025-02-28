import React from 'react';
import EmbarazadasCarousel from './components/EmbarazadasCarousel';

const EmbarazadasPage = () => {
    const images = [
        '../assets/img/embarazadas (1).jpg',
        '../assets/img/embarazadas (2).jpg',
        '../assets/img/embarazadas (3).jpg',
        '../assets/img/embarazadas (4).jpg',
        '../assets/img/embarazadas (5).jpg',
        '../assets/img/embarazadas (6).jpg',
        '../assets/img/embarazadas (7).jpg',
        '../assets/img/embarazadas (8).jpg',
        '../assets/img/embarazadas (9).jpg',
        '../assets/img/embarazadas (10).jpg',
    ];

    return (
        <div>
            <h2>EMBARAZADAS</h2>
            <p>
                Aquí podrán encontrar algunas fotografías de books de embarazadas, conoce mi trabajo en esta bella etapa de
                la vida de una mujer.
            </p>
            <EmbarazadasCarousel images={images} />
        </div>
    );
};

export default EmbarazadasPage;