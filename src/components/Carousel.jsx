import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/candy1.png", // Les images sont dans le dossier public/images
    "/images/candy2.png",
    "/images/candy3.png"
  ];

  // Fonction pour changer l'image après un délai
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change l'image toutes les 3 secondes

    return () => clearInterval(intervalId); // Nettoie l'intervalle au démontage du composant
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="prev-btn" onClick={handlePrev}>
        &#60;
      </button>
      <div className="carousel-slide">
        <img src={images[currentIndex]} alt="slide" className="carousel-image" />
      </div>
      <button className="next-btn" onClick={handleNext}>
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
