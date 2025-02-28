import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const EmbarazadasCarousel = ({ images }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;

        // Animación inicial del carrusel
        gsap.from(carousel, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
        });

        // Animación de los elementos del carrusel
        gsap.from(carousel.children, {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            delay: 0.5,
        });
    }, []);

    return (
        <div ref={carouselRef} className="embarazadas-carousel">
            {images.map((image, index) => (
                <div key={index} className="carousel-item">
                    <img src={image} alt={`Imagen ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default EmbarazadasCarousel;