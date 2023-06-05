import React, { useState, useEffect } from 'react'
import './carousel.css';

import { carouselImages } from '../../constants';
const Carousel = () => {
    // manage carousel state here
    const [currentCarouselImageIndex, setCurrentCarouselImageIndex] = useState(0);
    const [isCarouselImageHovered, setIsCarouselImageHovered] = useState(false)
    const handleDotClick = (index) => {
        setCurrentCarouselImageIndex(index)
    }
    const handleMouseEnter = () => {
        setIsCarouselImageHovered(true)
    }
    const handleMouseLeave = () => {
        setIsCarouselImageHovered(false)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            if (!isCarouselImageHovered || isCarouselImageHovered) {
                const nextIndex = (currentCarouselImageIndex + 1) % carouselImages.length;
                // setCurrentCarouselImageIndex(nextIndex);
            }
        }, 1000); // Adjust the interval time as needed (e.g., 5000ms = 5 seconds)

        return () => {
            clearInterval(timer); // Clean up the timer on component unmount
        };
    }, [currentCarouselImageIndex, carouselImages.length, isCarouselImageHovered]);

    return (
        <div className='carousel'>
            <div className='carousel-container' style={{ transform: `translateX(-${currentCarouselImageIndex * 100}%)` }}>
                {
                    carouselImages.map((image, index) => (
                        <div className='carousel-item' key={index} onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <img src={image.src} alt={image.alt} />
                            <div className='caption'><b>{image.captionHeading}</b> <p>{image.caption}</p></div>
                        </div>
                    ))
                }
            </div>
            <div className='carousel-dot'>
                {
                    carouselImages.map((image, index) => (
                        <span key={index}
                            className={`dot ${currentCarouselImageIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)} ></span>
                    ))
                }
            </div>
        </div>
    )
}

export default Carousel